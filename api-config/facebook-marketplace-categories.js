// Supported category IDs for browsing without query, not a global keyword-search enum.
export const marketplaceBrowseCategories = [
  { label: "Antiques", value: "393860164117441" },
  { label: "Appliances", value: "678754142233400" },
  { label: "Bicycles", value: "1658310421102081" },
  { label: "Boats", value: "712638205822882" },
  { label: "Electronics", value: "1792291877663080" },
  { label: "Furniture", value: "1583634935226685" },
  { label: "Garden", value: "800089866739547" },
  { label: "Household", value: "1569171756675761" },
  { label: "Tools", value: "1670493229902393" },
  { label: "Trailers", value: "655837954899686" },
  { label: "Vehicles", value: "807311116002614" },
  { label: "Vehicles (alternate ID)", value: "546583916084032" },
];

export const marketplaceCategoryDescription =
  "Use an ID below to browse without a keyword. Other category IDs require a keyword.";

export const marketplaceCategoryFullDescription = [
  "Category ID from listing results. Omit query to browse a category below.",
  "",
  "Allowed IDs for keyword-free browsing:",
  ...marketplaceBrowseCategories.map(({ label, value }) => `- ${label}: ${value}`),
  "",
  "Other category IDs, including Housing, Food, and Services, require a keyword.",
].join("\n");
