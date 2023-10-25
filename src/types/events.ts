import { UserInterface } from "./user"

export interface AppEventsInterface<EventData = undefined> {
	event: EventData
	app: UserInterface
}
