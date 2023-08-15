export class AppConstants {
  public static get urlServidor(): string {
    return "http://localhost:3000/"
  }

  public static get urlLogin(): string {
    return this.urlServidor+"login"
  }
}