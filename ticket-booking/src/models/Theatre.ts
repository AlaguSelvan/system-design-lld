class Theatre {

	constructor(readonly _id: string, readonly name: string, readonly screens: Screen[]) {
		this._id = _id;
		this.name = name;
		this.screens = screens;
	}

	public addScreen(screen: Screen) {
		this.screens.push(screen);
	}
}