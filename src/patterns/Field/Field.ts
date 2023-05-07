import { ObjectGeneric } from "@/types";

export interface Input {
  component: any;
  page: number;
  block: number;
  text: string;
  props?: ObjectGeneric;
  attrs?: ObjectGeneric;
}
