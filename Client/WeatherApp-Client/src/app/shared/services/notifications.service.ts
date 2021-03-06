import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NotificationRequestModel } from "../models/notificationRequestModel";
import { WeatherNotificationModel } from "../models/weatherNotification.model";
import { PushNotificationsService, PushNotification } from "ng-push";

@Injectable()
export class NotificationsService {
  constructor(
    private httpClient: HttpClient,
    private _pushNotificationService: PushNotificationsService
  ) {}

  private baseUrl: string = "https://localhost:44377/api/notifications/";

  private userID = localStorage.getItem("userID");

  get GetUserID() {
    return this.userID;
  }

  registerToNotifications(model: NotificationRequestModel) {
    return this.httpClient.post(this.baseUrl + "registerNotification", model);
  }

  ///this is temporary method to test connection to the server
  getNotification() {
    if (this.userID == null || undefined) {
      console.error("userID is null");
      return;
    }
    return this.httpClient.get(this.baseUrl + "send");
  }

  requestNotificationPermission(): void {
    this._pushNotificationService.requestPermission();
  }

  showNotification(model: WeatherNotificationModel) {
    let options: PushNotification = {
      body: `${model.CityName} ${model.TempC}C. ${model.WeatherDescription}`,
      icon: model.ImageUrl,
    };
    return this._pushNotificationService.create("Weatherealise", options);
  }
}
