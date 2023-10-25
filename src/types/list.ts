import { FlatListProps } from "react-native"

export interface BPFlatListItem {
	id: number | string
	// Other properties...
}

export interface BPFlatlistProps<ItemT> extends FlatListProps<ItemT> {
	keyExtractor?: (item: ItemT, index: number) => string
	separator?: React.ReactNode
}
