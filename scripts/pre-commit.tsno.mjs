#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file:///Users/yangqianlu/Desktop/vue\u9879\u76EE\u7EC3\u4E60/byelide/node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await $`pnpm spellcheck`.catch((out) => {
      console.log(out);
      throw new Error(out.stdout);
    });
    await Promise.all([$`pnpm type-check`, $`pnpm lint:stage`]).catch((out) => {
      printObject(out);
      throw new Error(out.stdout);
    });
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch((out) => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovLy9Vc2Vycy95YW5ncWlhbmx1L0Rlc2t0b3AvdnVlXHU5ODc5XHU3NkVFXHU3RUMzXHU0RTYwL2J5ZWxpZGUvbm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanNcIik7XG5pbXBvcnQge1xuICBjb2xvcnNcbn0gZnJvbSBcIi4vY2h1bmstRkhEWFhPS1kuanNcIjtcblxuXG4vLyBzcmMvY2xpZW50LnRzXG52YXIgZmV0Y2ggPSAodXJsLCBpbml0KSA9PiBpbXBvcnQoXCIuL3NyYy00UTdRNjdDMy5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KHVybCwgaW5pdCkpO1xudmFyIGF4aW9zID0gKGNvbmZpZykgPT4gaW1wb3J0KFwiLi9heGlvcy1QSVo0QzVVWi5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KGNvbmZpZykpO1xuZXhwb3J0IHtcbiAgYXhpb3MsXG4gIGNvbG9ycyxcbiAgZmV0Y2hcbn07XG4iLCAiaW1wb3J0IHsgUHJvY2Vzc091dHB1dCB9IGZyb20gJ3p4L2NvcmUnXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludE9iamVjdChcbiAgb2JqZWN0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IFByb2Nlc3NPdXRwdXQsXG4gIG1ldGhvZDogJ2xvZycgfCAnd2FybicgfCAnZXJyb3InID0gJ2xvZydcbikge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlW21ldGhvZF0oYCR7a2V5fTpcXG4ke3ZhbHVlfVxcbmApXG4gIH1cbn1cbiIsICIjIS91c3IvYmluL2VudiB6eFxuXG5pbXBvcnQgdHlwZSB7IFByb2Nlc3NPdXRwdXQgfSBmcm9tICd6eCdcbmltcG9ydCB7ICQgfSBmcm9tICd6eCdcbmltcG9ydCB7IHByaW50T2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuYXdhaXQgJGBwbnBtIHNwZWxsY2hlY2tgLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcbiAgY29uc29sZS5sb2cob3V0KVxuXG4gIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxufSlcblxuLy8gYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSB0eXBlLWNoZWNrYCwgJGBwbnBtIGxpbnRgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xuLy8gICBwcmludE9iamVjdChvdXQpXG4vLyAgIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxuLy8gfSlcblxuLy8gY2hlY2sgdHlwZSBhbmQgc3RhZ2VcbmF3YWl0IFByb21pc2UuYWxsKFskYHBucG0gdHlwZS1jaGVja2AsICRgcG5wbSBsaW50OnN0YWdlYF0pLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcbiAgcHJpbnRPYmplY3Qob3V0KVxuICB0aHJvdyBuZXcgRXJyb3Iob3V0LnN0ZG91dClcbn0pXG4iLCAiIyEvdXNyL2Jpbi9lbnYgenhcblxuaW1wb3J0IHsgJCB9IGZyb20gJ3p4J1xuXG5jb25zb2xlLmxvZygnXHU1RjAwXHU1OUNCXHU2MjY3XHU4ODRDXHU0RUUzXHU3ODAxXHU4RDI4XHU5MUNGXHU4QkM0XHU0RjMwLi4uXFxuJylcblxuYXdhaXQgaW1wb3J0KCcuL2NoZWNrJykuY2F0Y2goKG91dCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1x1NEVFM1x1NzgwMVx1OEQyOFx1OTFDRlx1OEJDNFx1NEYzMFx1NTkzMVx1OEQyNSwgXHU4QkY3XHU2OEMwXHU2N0U1XHU0RUUzXHU3ODAxJylcbn0pXG5cbmNvbnNvbGUubG9nKCdwcmludGYgXCJcdTY4QzBcdTZENEJcdTkwMUFcdThGQzcsIFx1NTIxQlx1NUVGQSBjb21taXQgXHU0RTJELi4uXFxuJylcblxuYXdhaXQgJGBnaXQgYWRkIC5gXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBLFNBQVEsaUJBQWlCLHlCQUF3QjtBQUFqRCxJQUE4REE7QUFBOUQ7QUFBQTtBQUEwRCxJQUFJQSxXQUFRLGtCQUFrQixxSUFBaUg7QUFBQTtBQUFBOzs7QUNFbE0sU0FBUyxZQUNkLFFBQ0EsU0FBbUMsT0FDbkM7QUFDQSxhQUFXLENBQUMsS0FBSyxLQUFLLEtBQUssT0FBTyxRQUFRLE1BQU0sR0FBRztBQUVqRCxZQUFRLFFBQVEsR0FBRztBQUFBLEVBQVM7QUFBQSxDQUFTO0FBQUEsRUFDdkM7QUFDRjtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBR0EsU0FBUyxTQUFTO0FBSGxCO0FBQUE7QUFBQTtBQUlBO0FBRUEsVUFBTSxtQkFBbUIsTUFBTSxDQUFDLFFBQXVCO0FBQ3JELGNBQVEsSUFBSSxHQUFHO0FBRWYsWUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsSUFDNUIsQ0FBQztBQVFELFVBQU0sUUFBUSxJQUFJLENBQUMsb0JBQW9CLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQXVCO0FBQ3hGLGtCQUFZLEdBQUc7QUFDZixZQUFNLElBQUksTUFBTSxJQUFJLE1BQU07QUFBQSxJQUM1QixDQUFDO0FBQUE7QUFBQTs7O0FDckJEO0FBRUEsU0FBUyxLQUFBQyxVQUFTO0FBRWxCLFFBQVEsSUFBSSxtRUFBaUI7QUFFN0IsTUFBTSx1Q0FBa0IsTUFBTSxDQUFDLFFBQVE7QUFDckMsUUFBTSxJQUFJLE1BQU0sa0ZBQWlCO0FBQ25DLENBQUM7QUFFRCxRQUFRLElBQUksbUVBQWdDO0FBRTVDLE1BQU1BOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlIiwgIiQiXQp9Cg==
