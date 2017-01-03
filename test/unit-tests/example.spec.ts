import { TestFixture, Test, Expect } from "alsatian";

@TestFixture("example")
export default class ExampleTestFixture {

    @Test("example test")
    public exampleTest() {
        Expect(2 + 2).toBe(4);
    }
}