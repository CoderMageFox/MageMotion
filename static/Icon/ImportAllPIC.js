let importAll = (requireContet) => requireContext.keys().forEach(requireContext);

try {
    importAll(require.context("../../icons/", true, "/\.png$/"));
} catch (error) {
    console.log(error);
}
