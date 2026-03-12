import { useEffect, useRef } from 'react'
import { SYMBOL_TOOLTIPS } from '../data.js'
import TasksSection from './TasksSection.jsx'
import CodeSection from './sections/CodeSection.jsx'
import CardsSection from './sections/CardsSection.jsx'
import BulletsSection from './sections/BulletsSection.jsx'

function renderSection(sec, i) {
  if (sec.type === 'code')    return <CodeSection key={i} sec={sec} />
  if (sec.type === 'cards')   return <CardsSection key={i} sec={sec} />
  if (sec.type === 'bullets') return <BulletsSection key={i} sec={sec} />
  return null
}

export default function LessonPage({ lesson, onNavigate, nav }) {
  const pageRef = useRef(null)

  // Find next label for button text
  const nextItem = nav.flatMap(g => g.items).find(i => i.id === lesson.next)
  const btnText = nextItem ? `Next: ${nextItem.label} →` : 'Continue →'

  // Inject symbol tooltips after render
  useEffect(() => {
    if (!pageRef.current) return
    injectSymbolTooltips(pageRef.current)
  }, [])

  return (
    <div className="page active" ref={pageRef}>
      <div className="page-header">
        <div className="badge">{lesson.badge}</div>
        <h2>{lesson.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: lesson.intro }} />
      </div>

      {(lesson.sections || []).map((sec, i) => renderSection(sec, i))}

      {lesson.tasks && lesson.tasks.length > 0 && (
        <TasksSection tasks={lesson.tasks} />
      )}

      {lesson.next && (
        <button className="next-btn" onClick={() => onNavigate(lesson.next)}>
          {btnText}
        </button>
      )}
    </div>
  )
}

// ── Symbol tooltip logic ──────────────────────────────────────
let tipEl = null

function getOrCreateTip() {
  if (tipEl) return tipEl
  tipEl = document.createElement('div')
  tipEl.className = 'sym-tip'
  tipEl.innerHTML = '<div class="sym-tip-title"></div><div class="sym-tip-desc"></div>'
  document.body.appendChild(tipEl)
  return tipEl
}

function showTip(e, title, desc) {
  const tip = getOrCreateTip()
  tip.querySelector('.sym-tip-title').textContent = title
  tip.querySelector('.sym-tip-desc').textContent = desc
  tip.classList.add('visible')
  moveTip(e, tip)
}

function moveTip(e, tip) {
  if (!tip) tip = getOrCreateTip()
  const pad = 14
  let x = e.clientX + pad
  let y = e.clientY + pad
  const tw = 300, th = 120
  if (x + tw > window.innerWidth) x = e.clientX - tw - pad
  if (y + th > window.innerHeight) y = e.clientY - th - pad
  tip.style.left = x + 'px'
  tip.style.top = y + 'px'
}

function hideTip() {
  if (tipEl) tipEl.classList.remove('visible')
}

export function injectSymbolTooltips(container) {
  const SYMS = SYMBOL_TOOLTIPS
  const sorted = Object.keys(SYMS).sort((a, b) => b.length - a.length)

  container.querySelectorAll('pre code, .q-code').forEach(el => {
    el.querySelectorAll('.op, .kw').forEach(span => {
      const text = span.textContent.trim()
      for (const sym of sorted) {
        if (text === sym && SYMS[sym]) {
          span.classList.add('sym')
          span.dataset.sym = sym
          break
        }
      }
    })
  })

  container.addEventListener('mouseover', e => {
    const sym = e.target.closest('.sym')
    if (!sym) return
    const key = sym.dataset.sym
    if (SYMS[key]) showTip(e, SYMS[key].title, SYMS[key].desc)
  })
  container.addEventListener('mousemove', e => {
    if (e.target.closest('.sym')) moveTip(e)
  })
  container.addEventListener('mouseout', e => {
    if (e.target.closest('.sym')) hideTip()
  })
}
