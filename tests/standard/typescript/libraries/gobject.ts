import GObject from "gi://GObject";
{
  {
    GObject.registerClass as (...args: any[]) => {};

    const Subclass = GObject.registerClass(class Subclass extends GObject.Object {});
    const object = new Subclass();
    object.connect("notify", () => {});
    object.connect("not-a-signal", () => {});
  }
  {
    const Subclass = GObject.registerClass({}, class Subclass extends GObject.Object {});
    const object = new Subclass();
    object.connect("notify", () => {});
  }
  {
    const Subclass = GObject.registerClass(
      {
        Signals: {
          "testing-signal": [],
        },
      },
      class Subclass extends GObject.Object {}
    );
    const object = new Subclass();
    object.connect("notify", () => {});
    object.connect("testing-signal", () => {});
  }

  {
    const Subclass = GObject.registerClass(
      {
        Properties: {},
      },
      class Subclass extends GObject.Object {}
    );
    const object = new Subclass();
    // @ts-expect-error
    object.x;
  }

  {
    const Subclass = GObject.registerClass(
      {
        Properties: {
          x: GObject.ParamSpec.boolean("x", "x", "an x", GObject.ParamFlags.READWRITE, false),
        },
      },
      class Subclass extends GObject.Object {}
    );
    const object = new Subclass();
    object.x = false;
  }
}

{
  const ChildObject = GObject.registerClass(
    class extends GObject.Object {
      x!: number;

      _init() {
        super._init();

        this.x = 5;
      }

      doX() {}
    }
  );

  const child = new ChildObject();

  child.x;
  child.doX();

  const ChildObjectWithConstructorParams = GObject.registerClass(
    class extends GObject.Object {
      x!: number;

      _init(properties: { a: number; b: string; c: boolean }, d: number, e: boolean) {
        super._init();

        this.x = 5;
      }

      doX() {}
    }
  );

  const child2 = new ChildObjectWithConstructorParams(
    {
      a: 5,
      b: "",
      c: false,
    },
    5,
    true
  );

  child2.connect("notify", () => {});

  const ChildObjectWithProperties = GObject.registerClass(
    {
      Properties: {
        "snake-case": GObject.ParamSpec.boolean(
          "snake-case",
          "snake case",
          "a snake case prop",
          GObject.ParamFlags.READWRITE,
          false
        ),
        normal: GObject.ParamSpec.string(
          "normal",
          "normal",
          "a normal prop",
          GObject.ParamFlags.READABLE,
          ""
        ),
      },
    },
    class extends GObject.Object {
      x!: number;

      _init() {
        super._init();
      }
    }
  );

  const child3 = new ChildObjectWithProperties();

  child3.normal;
  child3.snakeCase;
  child3.snake_case;
}
