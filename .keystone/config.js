"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// src/keystone/schema.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var lists = {
  Post: (0, import_core.list)({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: {
      operation: import_access.allowAll,
      filter: {
        query: ({ session }) => {
          console.log("Post.access.filter session", session);
          if (session?.user === "astro" && session?.browser) {
            return {
              browser: { equals: session.browser }
            };
          }
          return true;
        }
      }
    },
    // this is the fields for our Post list
    fields: {
      title: (0, import_fields.text)({ validation: { isRequired: true } }),
      // we use this field to arbitrarily restrict Posts to only be viewed on a particular browser (using Post.access.filter)
      browser: (0, import_fields.select)({
        options: [
          { label: "Chrome", value: "chrome" },
          { label: "Firefox", value: "firefox" }
        ],
        validation: { isRequired: true }
      })
    }
  })
};

// keystone.ts
var keystone_default = (0, import_core2.config)({
  db: {
    // we're using sqlite for the fastest startup experience
    //   for more information on what database might be appropriate for you
    //   see https://keystonejs.com/docs/guides/choosing-a-database#title
    provider: "sqlite",
    url: "file:./keystone.db",
    // WARNING: this is only needed for our monorepo examples, dont do this
    //   we use using myprisma, not .myprisma, because vite
    prismaClientPath: "node_modules/myprisma/client"
  },
  server: {
    // We're using a custom port for this example so Astro and Keystone can run at the same time
    port: 4e3
  },
  lists
});
//# sourceMappingURL=config.js.map
