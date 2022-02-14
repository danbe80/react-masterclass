import 'styled-components';

// and extend theme!
declare module 'styled-components' {
	export interface DefaultTheme {
		bgColor: string;
		cardColor: string;
		boardColor: string;
	}
}