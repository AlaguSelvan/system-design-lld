import Movie from "./Movie";
import TheatreScreen from "./Screen";

class Show {
	constructor(readonly id: string, readonly movie: Movie, readonly screen: TheatreScreen, readonly startTime: Date, readonly durationInSeconds: Number) {
		this.id = id;
		this.movie = movie;
		this.screen = screen;
		this.startTime = startTime;
		this.durationInSeconds = durationInSeconds;
	}
}

export default Show;