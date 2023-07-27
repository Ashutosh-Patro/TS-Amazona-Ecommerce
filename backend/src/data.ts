import { Product } from "./types/Product";
import { Users } from "./types/Users";
import bcrypt from "bcryptjs";

export const sampleProducts: Product[] = [
  {
    name: "Nike Slim shirt",
    slug: "nike-slim-shirt",
    category: "Shirts",
    image: "../images/p1.jpg",
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    description: "high quality shirt",
  },
  {
    name: "Adidas Fit Shirt",
    slug: "adidas-fit-shirt",
    category: "Shirts",
    image: "../images/p2.jpg",
    price: 100,
    countInStock: 20,
    brand: "Adidas",
    rating: 4.0,
    numReviews: 10,
    description: "high quality product",
  },
  {
    name: "Lacoste Free Pants",
    slug: "lacoste-free-pants",
    category: "Pants",
    image: "../images/p3.jpg",
    price: 220,
    countInStock: 0,
    brand: "Lacoste",
    rating: 4.8,
    numReviews: 17,
    description: "high quality product",
  },
  {
    name: "Nike Slim Pant",
    slug: "nike-slim-pant",
    category: "Pants",
    image: "../images/p4.jpg",
    price: 78,
    countInStock: 15,
    brand: "Nike",
    rating: 4.5,
    numReviews: 14,
    description: "high quality product",
  },
];

export const sampleUsers: Users[] = [
  {
    name: "Ashutosh",
    email: "ashutosh@itobuz.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "Tuhin",
    email: "tuhin@itobuz.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];

import {
  modelOptions,
  prop,
  getModelForClass,
  Ref,
} from "@typegoose/typegoose";
import { Product } from "./productModel";
import { User } from "./userModel";

class ShippingAddress {
  @prop()
  public fullName?: string;
  @prop()
  public address?: string;
  @prop()
  public city?: string;
  @prop()
  public postalCode?: string;
  @prop()
  public country?: string;
  @prop()
  public lat?: number;
  @prop()
  public lng?: number;
}

class Item {
  @prop({ required: true })
  public name!: string;
  @prop({ required: true })
  public quantity!: string;
  @prop({ required: true })
  public image!: number;
  @prop({ required: true })
  public price!: number;
  @prop({ ref: Product })
  public product?: Ref<Product>;
}

class PaymentResult {
  @prop()
  public paymentId!: string;
  @prop()
  public status!: string;
  @prop()
  public update_time!: string;
  @prop()
  public email_address!: string;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Order {
  public _id!: string;
  @prop()
  public orderItems!: Item[];
  @prop()
  public shippingAddress?: ShippingAddress;

  @prop({ ref: User })
  public user?: Ref<User>;

  @prop({ required: true })
  public paymentMethod!: string;
  @prop()
  public paymentResult?: PaymentResult;
  @prop({ required: true, default: 0 })
  public itemsPrice!: number;
  @prop({ required: true, default: 0 })
  public shippingPrice!: number;
  @prop({ required: true, default: 0 })
  public taxPrice!: number;
  @prop({ required: true, default: 0 })
  public totalPrice!: number;
  @prop({ required: true, default: false })
  public isPaid!: boolean;
  @prop()
  public paidAt!: Date;
  @prop({ required: true, default: false })
  public isDelivered!: boolean;
  @prop()
  public deliveredAt!: Date;
}

export const OrderModel = getModelForClass(Order);
