// make sure to export default component not export const
export default {
  admin: () => [import("web.form/src/AdminCMS"), { c: "", s: "", h: "" }],
  qform: () => [import("web.form/src/QForm"), { c: "", s: "", h: "" }],
  qlist: () => [import("web.list/src/QList"), { c: "", s: "", h: "" }],
  primary: () => [import("./components/primary"), { c: "", s: "", h: "" }],
  "btn-primary": () => [
    import("./components/btn-primary"),
    { c: "", s: "", h: "" },
  ],
};
