/** Reponse format expected from server after requesting a checkout session */
interface Session {
  /** Session ID to stripe checkout */
  sessionID: string;
}
