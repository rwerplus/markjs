import Markjs from './src/index.js'
import mousePlugin from './src/plugins/mouse.js'
import orderPlugin from './src/plugins/order.js'
Markjs.use(mousePlugin)
Markjs.use(orderPlugin)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div id="markBox" style="width: 800px; height: 600px;border: 1px solid #ccc"></div>
  </div>
`
document.addEventListener('DOMContentLoaded', () => {
  const markBox = document.querySelector<HTMLDivElement>('#markBox')!
  let markjs = new Markjs({
    el: markBox,
    hoverActive: false,
    dbClickActive: false,
    noCrossing: true,
    dbClickTime:  200,
    enableAddPoint: true,
    area: true,
    showPen: true,
    singleClickComplete: true,
    pointType: 'circle',
    pointWidth: 2,
    pointStyle: {
      lineWidth: 2,
      strokeColor: '#0088FF',
      fillColor: '#fff'
    },
    lineType: 'borderLine',
    strokeStyle: {
      lineWidth: 5,
      strokeColor: 'rgba(255, 255, 255, 0.7)',
      frontLineWidth: 3,
      frontStrokeColor: '#2196F3'
    },
    fillColor: 'rgba(0,136,255,0.30)',
    dbClickRemovePoint: true
  })
  markjs.on('CURRENT-MARK-ITEM-CHANGE', (item) => {
  })
  markjs.on('COMPLETE-CREATE-ITEM', (item) => {
    console.log("🚀 ~ markjs.on ~ item:", item)
    item.name = 'markjs'
  })
  markjs.on('IS-CREATE-MARKING-CHANGE', (state) =>{
  })
  markjs.on('NOT-ENOUGH-END-POINTS', (state) =>{
  })
  markjs.on('LINE-CROSS', (item) => {
  })
  markjs.on('NOT-ENOUGH-POINTS-REMOVE', (item) => {
  })
  //鼠标插件
  console.log(markjs)
  markjs.createMarkItem()
})