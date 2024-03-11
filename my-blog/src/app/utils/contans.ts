export type Blog = {
  id: string;
  title: string;
  content: string;
  img: string;
};

export const Blog: Blog[] = [
  {
    id: "1",
    title: "Mon premier article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    img: "https://picsum.photos/id/1015/500/300",
  },
  {
    id: "2",
    title: "Mon deuxième article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    img: "https://picsum.photos/id/1016/500/300",
  },
  {
    id: "3",
    title: "Mon troisième article",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    img: "https://picsum.photos/id/1018/500/300",
  },
];
