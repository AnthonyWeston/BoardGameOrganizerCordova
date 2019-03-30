export interface BoardGame {
  readonly id: number;
  title: string;
  imageUrl: string;
  type: string;
  minPlayers: number;
  maxPlayers: string | number;
  notes: string;
}
