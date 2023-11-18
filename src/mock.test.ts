import { describe, expect, test } from "vitest";

describe("Sample Testing", () => {
  const headerAuth = { auth: "12345" };

  test("sample unauthorized", async () => {
    const response = await fetch("http://test/example-get");
    expect(response.status).toBe(401);
  });

  test("sample get", async () => {
    const response = await fetch("http://test/example-get", {
      headers: headerAuth,
    });
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.id).toBe(1);
  });

  test("sample post", async () => {
    const samplePost = { id: 1, name: "sample" };
    const parameters = {
      method: "POST",
      headers: headerAuth,
      body: JSON.stringify(samplePost),
    };
    const response = await fetch("http://test/example-post", parameters);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.id).toBe(1);
    expect(data.name).toBe("sample");
  });
});
