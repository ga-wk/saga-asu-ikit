"use strict";

/** Пример работы
 * getCookie("cookie")->cookie/false
 * setCookie("cookie","1231",{"max-age": `${new Date(Date.now() + 8 * 3600000)`})->true/false
 * deleteCookie("cookie")->true/false
 */

export class Cookie {
  constructor() {}
  static getCookie(cookieName) {
    /** Получить куки
     * parameter:
     * cookieName -> String
     *
     * return:
     * accepted: String
     * reject: Boolean
     */
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
  }

  static setCookie(cookieName, value, options = {}) {
    /** Записать куки
     * parameter:
     * cookieName -> String
     * value-> String
     * options -> Object
     *
     * return:
     * accepted: Boolean
     * reject: Boolean
     */
    options = {
      path: "/",
      ...options,
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
      encodeURIComponent(cookieName) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;

    return true;
  }

  static deleteCookie(cookieName) {
    /** Удалить куки
     * parameter:
     * cookieName -> String
     *
     * return:
     * accepted: Boolean
     * reject: Boolean
     */
    return Cookie.setCookie(cookieName, "", {
      "max-age": -1,
    });
  }
}
