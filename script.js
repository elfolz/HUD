var minimized = false

function toggleMenu() {
	minimized = !minimized
	if (minimized) document.querySelector('main').classList.add('hidden')
	else document.querySelector('main').classList.remove('hidden')
}

document.onreadystatechange = () => {
	if (document.readyState != 'complete') return
	document.querySelector('#toggleMinimize').onclick = () => toggleMenu()
	window.onkeydown = e => { if (e.code == 'Escape') toggleMenu() }
	document.querySelector('main').ondragstart = e => {
		e.target.style.setProperty('cursor', 'grabbing')
		e.dataTransfer.setData('text', 'lorem')
		e.dataTransfer.effectAllowed = 'move'
	}
	document.querySelector('main').ondragend = e => {
		let posX = e.screenX < (window.innerWidth/2) ? 'left' : 'right'
		let posY = e.screenY < (window.innerHeight/2) ? 'top' : 'bottom'
		e.target.className = ''
		e.target.classList.add(`${posX}-${posY}`)
		e.target.style.setProperty('cursor', 'grab')
	}
	document.ondragover = e => {
		e.preventDefault()
		e.dataTransfer.dropEffect = 'move'
	}
}