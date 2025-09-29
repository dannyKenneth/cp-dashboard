 import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  problems: defineTable({
    problemId: v.union( v.id("problemId"), v.null()),
    author: v.id("userId"),
    authorId: v.string(),
    problemTitle: v.string(),
    problemDescription: v.string(),
    imageUrl: v.optional(v.string()),
    imageId: v.optional(v.string()),
    authorImageUrl: v.string(),
    views: v.number(),
    difficulty: v.union(v.literal("Easy"), v.literal("Medium"), v.literal("Hard")),
    tags: v.array(v.string()),
  })
    .searchIndex("search_problemTitle", { searchField: "problemTitle" })
    .searchIndex("search_tags", { searchField: "tags" })
    .searchIndex("search_author", { searchField: "author" })
  ,

  users: defineTable({
    email: v.string(),
    imgUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
  })
});
