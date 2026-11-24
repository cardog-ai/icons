import { Metadata } from "next";
import { VinExplorer } from "../../components/vin-explorer";

export const metadata: Metadata = {
  title: "VIN mark | Cardog Icons",
  description:
    "A vehicle's identity mark, drawn from its VIN: the same on every surface, filling in as it is typed, and a scannable Data Matrix when it has to be.",
};

export default function VinPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-4">VIN mark</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        A vehicle&apos;s identity mark, drawn from its VIN in the text colour. The
        same VIN gives the same mark everywhere. It fills in as you type, coarsens
        with size, and becomes a real Data Matrix when it has to scan.
      </p>
      <VinExplorer />
    </div>
  );
}
