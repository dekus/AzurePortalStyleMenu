function dkSlideMenu(target) {
			var targetNode = document.querySelector(target);
			var SLMenu = document.getElementById("panel");
			var currentSelectedNode = null;
			function slideOn(event) {
				event = event || window.event;

				var target = event.target ? event.target : event.srcElement;
				if (target.parentNode.href) {
					var menuTarget=target.parentNode.hash.substr(1);
					if (currentSelectedNode) 
						currentSelectedNode.className="turnOff";
					currentSelectedNode = document.getElementById(menuTarget)
					if (!currentSelectedNode) return true;
						currentSelectedNode.className="turnOn";
					SLMenu.className = "slideOn";
				}
				return false;
			}
			function slideOff(event) {
				if (currentSelectedNode) currentSelectedNode.className="turnOff";
				SLMenu.className = "slideOff";
			}
			targetNode.onclick = slideOn;
			targetNode.querySelector("#backToMainMenu").onclick = slideOff;
		}