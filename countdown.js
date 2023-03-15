addEventListener('DOMContentLoaded', (event) => {
	const script = document.getElementById('demo-overlay');
	const start = new Date().getTime();
	const end = script.getAttribute('end') * 1000;

	const body = document.getElementsByTagName('body')[0];
	const display = document.createElement('div');
	body.appendChild(display);
	display.style.zIndex = '999999';
	display.style.display = 'flex';
	display.style.gap = '10px';
	display.style.position = 'absolute';
	display.style.top = '5px';
	display.style.left = '5px';
	display.style.right = '5px';
	display.style.padding = '10px';
	display.style.borderRradius = '5px';
	display.style.background = 'black';
	display.style.color = 'white';
	display.style.opacity = '0.6';
	display.style.justifyContent = 'center';
	display.style.alignItems = 'center';

	const countdown = document.createElement('div');
	display.appendChild(countdown);
	const actions = document.createElement('div');
	display.appendChild(actions);

	// Info button
	const info = document.createElement('button');
	info.innerText = 'info';
	info.style.background = 'none';
	info.style.borderRadius = '5px';
	info.style.border = '1px solid white';
	info.style.color = 'white';
	info.style.margin = '5px';
	info.style.padding = '5px 10px';
	actions.appendChild(info);
	info.onclick = () => {
		alert('This is an installation meant for evaluation. It will be decommissioned after 3 months of testing. At that point a decision needs to be made if we want to continue running this service. Even if the decision is in favor of continuing the service, we do not guarantee any data migration.');
	}

	// Close button
	const close = document.createElement('button');
	close.innerText = 'close';
	close.style.background = 'none';
	close.style.borderRadius = '5px';
	close.style.border = '1px solid white';
	close.style.color = 'white';
	close.style.padding = '5px 10px';
	actions.appendChild(close);
	close.onclick = () => {
		clearInterval(counter);
		display.parentNode.removeChild(display);
	}

	const tick = () => {
		const now = new Date().getTime();
		const distance = end - now;

		// Hide after 15 seconds
		if (now - start >= 15000) {
			clearInterval(counter);
			display.parentNode.removeChild(display);
		}

		// Time calculations for days, hours, minutes and seconds
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result
		countdown.innerHTML = 'Test installation end of life: '
			+ days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(counter);
			countdown.innerHTML = 'Warning: This installation is no longer supported and will be shut down soon!';
			display.style.bottom = '5px';
		}
	}
	const counter = setInterval(tick, 1000);
	tick();
});
