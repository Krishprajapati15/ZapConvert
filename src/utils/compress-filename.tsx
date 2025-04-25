export default function compressFileName(fileName: any): string {
  const maxSubstrLength = 18;

  if (fileName.length > maxSubstrLength) {
    const fileNameWithoutExtension = fileName.split(".").slice(0, -1).join(".");

    const fileExtension = fileName.split(".").pop();

    const charsToKeep =
      maxSubstrLength -
      (fileNameWithoutExtension.length + fileExtension.length + 3);

    const compressedFileName =
      fileNameWithoutExtension.substring(
        0,
        maxSubstrLength - fileExtension.length - 3
      ) +
      "..." +
      fileNameWithoutExtension.slice(-charsToKeep) +
      "." +
      fileExtension;

    return compressedFileName;
  } else {
    return fileName.trim();
  }
}
