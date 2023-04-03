interface Pole {
	x: number,
	y: number
}

export class Pill {
	positions: Array<Pole> = []
	interval: number

	constructor(x: number, y: number) {
        console.log("PILL CREATED")
        
		this.positions[0] = { x: x, y: y }
		this.positions[1] = { x: x + 1, y: y }

		this.interval = setInterval(() => {
			console.log("lecI!")
		}, 1000)
	}
}