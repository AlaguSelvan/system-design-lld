import BookingStatus from "./BookingStatus.enum";
import Seat from "./Seat";
import Show from "./Show";

class Booking {
	private bookingStatus: BookingStatus;

	constructor(readonly _id: string, readonly show: Show, readonly seatsBooked: Array<Seat>, readonly user: string) {
		this._id = _id;
		this.show = show;
		this.seatsBooked = seatsBooked;
		this.user = user;
		this.bookingStatus = BookingStatus.CREATED;
	}

	public isConfirmed(seat: Seat) {
		return this.bookingStatus === BookingStatus.CONFIRMED && this.seatsBooked.find(s => s._id === seat._id);
	}

	public confirmBooking() {
		if(this.bookingStatus === BookingStatus.EXPIRED) throw new Error("Booking has been expired");
		this.bookingStatus = BookingStatus.CONFIRMED;
	}


	public expireBooking() {
		if (this.bookingStatus === BookingStatus.EXPIRED) throw new Error("Booking has already been expired");
		this.bookingStatus = BookingStatus.EXPIRED;
	}

}


export default Booking;