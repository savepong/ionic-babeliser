import { Component } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    private _platform: Platform,
    public navCtrl: NavController,
    private _translate: TranslateService
  ) {}

  public title: string;
  public description: string;
  public language: string;

  public ionViewDidLoad(): void {
    this._initialiseTranslation();
  }

  public changeLanguage(): void {
    this._translateLanguage();
  }

  private _translateLanguage(): void {
    this._translate.use(this.language);
    this._initialiseTranslation();
  }

  private _initialiseTranslation(): void {
    setTimeout(() => {
      this.title = this._translate.instant("home.heading");
      this.description = this._translate.instant("home.description");
    }, 250);
  }
}
