import Seat from "./Seat";
import Show from "./Show";

class SeatLock {
	private seat: Seat;
	private show: Show;
	private timeoutInSeconds: number;
	private lockTime: Date;
	private lockedBy: string;

	constructor(seat: Seat, show: Show, timeoutInSeconds: number, lockedBy: string) {
		this.seat = seat;
		this.show = show;
		this.timeoutInSeconds = timeoutInSeconds;
		this.lockTime = new Date();
		this.lockedBy = lockedBy;
	}
}

export default SeatLock;