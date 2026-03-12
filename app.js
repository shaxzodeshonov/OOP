// ═══════════════════════════════════════════════════════════
//  app.js — Navigation, rendering, quiz logic, symbol tooltips
// ═══════════════════════════════════════════════════════════

// ── STATE ────────────────────────────────────────────────────
const state = {
  current: 'home',
  quizScores: { '1': 0, '2': 0, '3': 0 },
  answered: new Set(),
};

// ── TOOLTIP ELEMENT ───────────────────────────────────────────
const tip = document.createElement('div');
tip.className = 'sym-tip';
tip.innerHTML = '<div class="sym-tip-title"></div><div class="sym-tip-desc"></div>';
document.body.appendChild(tip);

function showTip(e, title, desc) {
  tip.querySelector('.sym-tip-title').textContent = title;
  tip.querySelector('.sym-tip-desc').textContent = desc;
  tip.classList.add('visible');
  moveTip(e);
}
function moveTip(e) {
  const pad = 14;
  let x = e.clientX + pad;
  let y = e.clientY + pad;
  const tw = 300, th = 120;
  if (x + tw > window.innerWidth)  x = e.clientX - tw - pad;
  if (y + th > window.innerHeight) y = e.clientY - th - pad;
  tip.style.left = x + 'px';
  tip.style.top  = y + 'px';
}
function hideTip() { tip.classList.remove('visible'); }

// ── SYMBOL TOOLTIP INJECTION ──────────────────────────────────
// Wraps matching operator tokens inside pre/code blocks with .sym spans
function injectSymbolTooltips(container) {
  const SYMS = window.SYMBOL_TOOLTIPS;

  // Sort by length desc so longer tokens (like "::") match before shorter (":")
  const sorted = Object.keys(SYMS).sort((a, b) => b.length - a.length);

  container.querySelectorAll('pre code, .q-code').forEach(el => {
    // We iterate over all text-node children and wrap matching tokens
    wrapTextNodes(el, sorted, SYMS);
  });

  // Attach mouse events via delegation
  container.addEventListener('mouseover', e => {
    const sym = e.target.closest('.sym');
    if (!sym) return;
    const key = sym.dataset.sym;
    if (SYMS[key]) showTip(e, SYMS[key].title, SYMS[key].desc);
  });
  container.addEventListener('mousemove', e => {
    if (e.target.closest('.sym')) moveTip(e);
  });
  container.addEventListener('mouseout', e => {
    if (e.target.closest('.sym')) hideTip();
  });
}

function wrapTextNodes(root, sorted, SYMS) {
  // Walk all text nodes that are direct children (innerHTML spans already parsed)
  // We look at .op spans specifically because that's where operators live
  root.querySelectorAll('.op, .kw').forEach(span => {
    const text = span.textContent.trim();
    for (const sym of sorted) {
      if (text === sym && SYMS[sym]) {
        span.classList.add('sym');
        span.dataset.sym = sym;
        break;
      }
    }
  });

  // Also scan raw text nodes for keywords not already in spans
  // (for q-code divs which are plain text with spans mixed in)
  scanNode(root, sorted, SYMS);
}

function scanNode(node, sorted, SYMS) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent;
    for (const sym of sorted) {
      if (!SYMS[sym]) continue;
      // Only match whole tokens
      const escaped = sym.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`(?<![a-zA-Z_])(${escaped})(?![a-zA-Z_=])`, 'g');
      if (re.test(text)) {
        re.lastIndex = 0;
        const frag = document.createDocumentFragment();
        let last = 0, m;
        while ((m = re.exec(text)) !== null) {
          if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
          const s = document.createElement('span');
          s.className = 'sym op';
          s.dataset.sym = sym;
          s.textContent = m[0];
          frag.appendChild(s);
          last = re.lastIndex;
        }
        if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
        node.parentNode.replaceChild(frag, node);
        return;
      }
    }
  } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('sym')) {
    Array.from(node.childNodes).forEach(child => scanNode(child, sorted, SYMS));
  }
}

// ── RENDER HELPERS ────────────────────────────────────────────
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderBadge(text) {
  return `<div class="badge">${text}</div>`;
}

function renderCodeSection(sec) {
  const wrap = el('div', 'section');
  wrap.innerHTML = `<div class="section-title">${sec.title}</div>`;
  const pre = el('pre');
  pre.innerHTML = `<code>${sec.code}</code><span class="code-tag">${sec.lang}</span>`;
  wrap.appendChild(pre);
  if (sec.rules && sec.rules.length) {
    const rb = el('div', 'rules-box');
    rb.innerHTML = `<div class="rules-label">📐 Rules</div><ul>${sec.rules.map(r=>`<li>${r}</li>`).join('')}</ul>`;
    wrap.appendChild(rb);
  }
  return wrap;
}

function renderCardsSection(sec) {
  const wrap = el('div', 'section');
  wrap.innerHTML = `<div class="section-title">${sec.title}</div>`;
  const grid = el('div', 'card-grid');
  sec.items.forEach(item => {
    grid.innerHTML += `<div class="card"><h4>${item.head}</h4><p>${item.text}</p></div>`;
  });
  wrap.appendChild(grid);
  return wrap;
}

function renderBulletsSection(sec) {
  const wrap = el('div', 'section');
  wrap.innerHTML = `<div class="section-title">${sec.title}</div><ul>${sec.items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
  return wrap;
}

function renderSection(sec) {
  if (sec.type === 'code')    return renderCodeSection(sec);
  if (sec.type === 'cards')   return renderCardsSection(sec);
  if (sec.type === 'bullets') return renderBulletsSection(sec);
  return el('div');
}

function renderTasks(tasks) {
  if (!tasks || !tasks.length) return null;
  const wrap = el('div', 'tasks-section');
  wrap.innerHTML = `
    <div class="tasks-header">
      <div class="tasks-icon">🛠️</div>
      <div class="tasks-title-block">
        <h3>Practice Tasks</h3>
        <p>Complete these before moving on</p>
      </div>
    </div>
  `;
  tasks.forEach((task, i) => {
    const item = el('div', 'task-item');
    item.innerHTML = `
      <div class="task-num">${i + 1}</div>
      <div class="task-body">
        <h4>${task.title}</h4>
        <p>${task.text}</p>
        <span class="task-tag tag-${task.diff}">${task.diff}</span>
      </div>
    `;
    wrap.appendChild(item);
  });
  return wrap;
}

// ── RENDER LESSON PAGE ────────────────────────────────────────
function renderLesson(id, lesson) {
  const page = el('div', 'page');
  page.id = id;

  if (lesson.type === 'home') {
    page.innerHTML = `
      <div class="home-hero">
        ${renderBadge(lesson.badge)}
        <h2>${lesson.title}</h2>
        <p>${lesson.subtitle}</p>
        <button class="start-btn" onclick="go('${lesson.next}')">Start Learning →</button>
      </div>
      <div class="day-plan">
        ${lesson.dayPlan.map(d => `
          <div class="day-card">
            <div class="day-num">${d.label}</div>
            <h3>${d.icon} ${d.title}</h3>
            <ul>${d.items.map(i=>`<li>${i}</li>`).join('')}</ul>
          </div>`).join('')}
      </div>
      <div class="plan-grid">
        ${lesson.tips.map(t => `
          <div class="plan-item">
            <div class="plan-icon">${t.icon}</div>
            <div><h4>${t.title}</h4><p>${t.text}</p></div>
          </div>`).join('')}
      </div>
    `;
    return page;
  }

  if (lesson.type === 'quiz') {
    return renderQuizPage(id, lesson);
  }

  // Standard lesson
  page.innerHTML = `
    <div class="page-header">
      ${renderBadge(lesson.badge)}
      <h2>${lesson.title}</h2>
      <p>${lesson.intro}</p>
    </div>
  `;

  (lesson.sections || []).forEach(sec => {
    page.appendChild(renderSection(sec));
  });

  const tasks = renderTasks(lesson.tasks);
  if (tasks) page.appendChild(tasks);

  if (lesson.next) {
    const nextLabel = window.NAV.flatMap(g => g.items).find(i => i.id === lesson.next);
    const btnText = nextLabel ? `Next: ${nextLabel.label} →` : 'Continue →';
    const btn = el('button', 'next-btn', btnText);
    btn.onclick = () => go(lesson.next);
    page.appendChild(btn);
  }

  return page;
}

// ── RENDER QUIZ PAGE ──────────────────────────────────────────
function renderQuizPage(id, lesson) {
  const page = el('div', 'page');
  page.id = id;

  page.innerHTML = `
    <div class="page-header">
      ${renderBadge(lesson.badge)}
      <h2>${lesson.title}</h2>
      <p>${lesson.intro}</p>
    </div>
  `;

  const wrap = el('div', 'quiz-wrap');
  wrap.innerHTML = `
    <div class="quiz-head-label">// QUIZ_0${lesson.quizId}</div>
    <div class="quiz-head-sub">${lesson.questions.length} questions · MCQ + Output Prediction · Click to answer</div>
  `;

  lesson.questions.forEach(q => {
    const block = el('div', 'q-block');
    block.id = q.id;

    let html = `<div class="q-num">${q.num} · ${q.type === 'output' ? 'Output Prediction' : 'Multiple Choice'}</div>`;
    html += `<div class="q-text">${q.text}</div>`;
    if (q.code) html += `<div class="q-code">${q.code}</div>`;
    html += `<div class="options">`;
    const letters = ['A','B','C','D'];
    q.opts.forEach((opt, i) => {
      html += `<div class="option" data-qid="${q.id}" data-letter="${letters[i]}">
        <span class="opt-letter">${letters[i]}</span>${opt}
      </div>`;
    });
    html += `</div>`;
    html += `<div class="feedback correct-fb" id="${q.id}-ok">${q.ok}</div>`;
    html += `<div class="feedback wrong-fb"   id="${q.id}-no">${q.no}</div>`;

    block.innerHTML = html;
    wrap.appendChild(block);
  });

  // Score display
  const scoreEl = el('div', 'quiz-score');
  scoreEl.id = `quiz${lesson.quizId}-score`;
  scoreEl.innerHTML = `<div class="score-num" id="quiz${lesson.quizId}-num">0/${lesson.questions.length}</div><div class="score-label">Quiz ${lesson.quizId} complete</div>`;
  wrap.appendChild(scoreEl);

  page.appendChild(wrap);

  // Next button
  if (lesson.next) {
    const nextLabel = window.NAV.flatMap(g => g.items).find(i => i.id === lesson.next);
    const btnText = nextLabel ? `Continue: ${nextLabel.label} →` : 'Continue →';
    const btn = el('button', 'next-btn', btnText);
    btn.onclick = () => go(lesson.next);
    page.appendChild(btn);
  } else {
    // Final quiz — show completion card
    const fin = el('div', 'finish-card');
    fin.innerHTML = `
      <div class="fi">🎓</div>
      <h3>You've covered the full OOP syllabus.</h3>
      <p>Now build something end-to-end — a mini bank system, a shape calculator with operator overloading, or a matrix library. A real project turns knowledge into skill.</p>
    `;
    page.appendChild(fin);
  }

  return page;
}

// ── QUIZ ANSWER HANDLER ───────────────────────────────────────
function handleOptionClick(e) {
  const opt = e.target.closest('.option');
  if (!opt) return;
  const qid    = opt.dataset.qid;
  const letter = opt.dataset.letter;
  if (!qid || state.answered.has(qid)) return;
  state.answered.add(qid);

  const correct = window.QUIZ_ANSWERS[qid];
  const isRight = letter === correct;
  const block   = document.getElementById(qid);
  const opts    = block.querySelectorAll('.option');
  const letters = ['A','B','C','D'];

  opts.forEach((o, i) => {
    o.classList.add('disabled');
    if (letters[i] === correct) o.classList.add('correct');
    else if (o === opt && !isRight) o.classList.add('wrong');
  });

  const okEl = document.getElementById(qid + '-ok');
  const noEl = document.getElementById(qid + '-no');
  if (isRight) okEl.classList.add('show');
  else         noEl.classList.add('show');

  // Which quiz does this question belong to?
  const qNum = qid[1]; // '1', '2', or '3'
  if (isRight) state.quizScores[qNum]++;

  // Check if all questions in this quiz are answered
  const allInQuiz = Object.keys(window.QUIZ_ANSWERS).filter(k => k[1] === qNum);
  const doneInQuiz = allInQuiz.filter(k => state.answered.has(k));
  if (doneInQuiz.length === allInQuiz.length) {
    const scoreEl = document.getElementById(`quiz${qNum}-score`);
    const numEl   = document.getElementById(`quiz${qNum}-num`);
    const total   = allInQuiz.length;
    const got     = state.quizScores[qNum];
    numEl.textContent = `${got}/${total}`;
    const pct = got / total;
    numEl.style.color = pct >= 0.83 ? 'var(--green)' : pct >= 0.5 ? 'var(--yellow)' : 'var(--red)';
    scoreEl.classList.add('show');
  }
}

// ── NAVIGATION ────────────────────────────────────────────────
window.go = function(id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.querySelector(`.nav-item[data-id="${id}"]`);
  if (navEl) navEl.classList.add('active');
  // Scroll main to top instantly
  const mainEl = document.getElementById('mainScroll');
  if (mainEl) mainEl.scrollTop = 0;
  state.current = id;
};

// ── BOOT ──────────────────────────────────────────────────────
function boot() {
  const mainEl   = document.getElementById('mainScroll');
  const pageWrap = document.getElementById('pageWrap');
  const sideNav  = document.getElementById('sideNav');

  // 1. Build sidebar nav from data
  window.NAV.forEach(group => {
    const groupEl = el('div', 'week-group');
    groupEl.innerHTML = `<div class="week-label">${group.group}</div>`;
    group.items.forEach(item => {
      const navItem = el('div', 'nav-item', `<span class="nav-dot"></span>${item.label}`);
      navItem.dataset.id = item.id;
      navItem.onclick = () => go(item.id);
      groupEl.appendChild(navItem);
    });
    sideNav.appendChild(groupEl);
  });

  // 2. Render all pages from LESSONS data
  Object.entries(window.LESSONS).forEach(([id, lesson]) => {
    const page = renderLesson(id, lesson);
    pageWrap.appendChild(page);
  });

  // 3. Delegate quiz clicks
  pageWrap.addEventListener('click', handleOptionClick);

  // 4. Inject symbol tooltips for all pre/code and q-code blocks
  injectSymbolTooltips(pageWrap);

  // 5. Show home page
  go('home');
}

document.addEventListener('DOMContentLoaded', boot);