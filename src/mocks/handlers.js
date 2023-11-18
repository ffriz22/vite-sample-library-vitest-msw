import { http, HttpResponse } from "msw";
const AUTH = "auth";
const sampleResponse = { id: 1, sample: "sample" };

function apiExample(path) {
  return `http://test${path}`;
}

export const handlers = [
  http.get(apiExample("/example-get"), async ({ request }) => {
    const authToken = request.headers.get(AUTH);
    if (!authToken || authToken !== "12345") {
      return HttpResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }

    return HttpResponse.json(sampleResponse);
  }),

  http.post(apiExample("/example-post"), async ({ request }) => {
    const authToken = request.headers.get(AUTH);
    if (!authToken || authToken !== "12345") {
      return HttpResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }

    const requestBody = await request.json();
    return HttpResponse.json(
      {
        id: requestBody.id,
        name: requestBody.name,
        createdAt: new Date().toLocaleString(),
      },
      { status: 201 }
    );
  }),
];
