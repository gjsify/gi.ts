import GLib from "gi://GLib";

{
  const variant = new GLib.Variant("s", "test");

  // @ts-expect-error
  const badVariant = new GLib.Variant("s", 2);

  const variantArray = GLib.Variant.new_array(null, [new GLib.Variant("i", 5), new GLib.Variant("i", 3)]);

  const _variantArrayUnpacked: GLib.Variant<"i">[] = variantArray.unpack();
  const _variantArrayDeepUnpacked: number[] = variantArray.deepUnpack();

  // Ensure type can be specified
  const nestedVariantArray = GLib.Variant.new_array(new GLib.VariantType("as"), [
    // Ensure type can be inferred
    GLib.Variant.new_array(null, [new GLib.Variant("s", "hi")]),
    GLib.Variant.new_array(null, [new GLib.Variant("s", "ho")]),
  ]);

  const _nestedVariantArrayUnpacked: GLib.Variant<"as">[] = nestedVariantArray.unpack();
  const _nestedVariantArrayDeepUnpacked: string[][] = nestedVariantArray.deepUnpack();

  const nestedBadVariantArray = GLib.Variant.new_array(new GLib.VariantType("ab"), [
    // Conflicting children should error.

    // @ts-expect-error
    GLib.Variant.new_array(null, [new GLib.Variant("s", "hi")]),
    // @ts-expect-error
    GLib.Variant.new_array(null, [new GLib.Variant("i", 5)]),
  ]);

  // @ts-expect-error
  new GLib.Variant("s", 5);
  new GLib.Variant("{su}", ["hi", 4]);
  new GLib.Variant("a{ss}", {});
  new GLib.Variant("a{ss}", {
    hi: "five!",
  });
  new GLib.Variant("a{sms}", {
    hi: "five!",
    ho: null,
  });
}
