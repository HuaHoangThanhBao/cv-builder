import { ObjectGeneric } from "@/types";

export interface Block {
  component: any;
  page: number;
  block: number;
  props?: ObjectGeneric;
}
