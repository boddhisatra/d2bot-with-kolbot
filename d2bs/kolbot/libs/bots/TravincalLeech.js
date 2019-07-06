/**
*   @filename   TravincalLeech.js
*   @author	 ToS/XxXGoD/YGM
*   @desc	   Travinical Leech
*/

function TravincalLeech() {
	var wait = true;
	
	addEventListener('copydata',
		function ReceiveCopyData(mode, msg) {
			if (mode === 83 && msg === "leave") {
				wait = false;
			}
		}
	)

	Town.goToTown(3);
	Town.move("portalspot");

	while (!Misc.inMyParty(Config.Leader) || !Pather.getPortal(83, Config.Leader)) {
		delay(500);
	}

	if (me.inTown && Pather.getPortal(83, Config.Leader)) {
		Pather.usePortal(83, Config.Leader);
		Town.getCorpse();
	}

	if (me.mode === 17) {
		me.revive();

		while (!me.inTown) {
			delay(100);
		}

		Town.move("portalspot");
	}
	
	while (wait) {
		delay(100);
	}

	return true;
}
