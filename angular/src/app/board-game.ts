export interface BoardGame {
  readonly id: number;
  title: string;
  imageUrl: string;
  minPlayers: number;
  maxPlayers: string | number;
  notes?: string;
}
