"use client";

import { Label } from "@/src/shared/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/src/shared/components/ui/radio-group";
import { useState } from "react";

export function RadioGroupComponent() {
  const [radioValue, setRadioValue] = useState("option-1");

  return (
    <>
      <RadioGroup value={radioValue} onValueChange={setRadioValue}>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option One</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option Two</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="option-3" id="option-3" />
          <Label htmlFor="option-3">Option Three</Label>
        </div>
      </RadioGroup>
      <p className="mt-4 text-xs text-muted-foreground font-mono">
        Selected: {radioValue}
      </p>
    </>
  );
}
