import anonymous from '@/assets/images/Ellipse.svg';
import dog from '@/assets/images/dog.jpg';
import Comment from './Comment';
import BookMark from './Bookmark';
import LikeButton from './likeButton';
import CommentCount from './CommentCount';
import ShareButton from './ShareButton';

function ContentDetail() {
  return (
    <div className="flex flex-col m-auto items-center gap-11 my-10 w-full">
      <div className="w-[988px]">
        <h1 className="text-black text-[32px] mb-3">올바르게 강아지 안는법</h1>
        <div className="flex justify-between">
          <figure className="flex gap-2 align-middle items-center">
            <img src={anonymous} alt="" />
            <p>이름 넣는 곳</p>
          </figure>
          <span className="pt-2">2023.09.06</span>
        </div>
        <div className="flex flex-col gap-11 mt-8">
          <figure className="w-fit mx-auto">
            <img src={dog} alt="" className="w-[600px]" />
            <figcaption aria-hidden></figcaption>
          </figure>
          <div className="px-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur laborum, ut cumque minima error adipisci veniam ipsam
            fugiat ullam ab soluta expedita minus culpa mollitia ex dolor
            tenetur corporis consequuntur! Minus maiores enim doloribus
            repudiandae quisquam totam alias tenetur incidunt ipsam pariatur
            eveniet natus perspiciatis quas, magni facere reprehenderit dolores
            consequuntur laboriosam, dicta nostrum illum debitis eos. Non, amet
            modi. Vel voluptates sit quidem eius voluptatem. Ratione odit
            cupiditate molestiae officiis sapiente laborum, repellendus tenetur
            sequi fugiat itaque culpa ad voluptate? A, asperiores. Laborum,
            autem. Voluptatem officia provident unde magni! Tenetur, temporibus
            repudiandae porro optio tempore aliquam necessitatibus dicta qui et
            ipsam minus error officia veniam! Natus laudantium qui dolorum.
            Aperiam, quisquam officiis voluptatem deserunt tenetur consequatur
            similique iure. Esse! Nisi nostrum recusandae autem dicta
            praesentium ad exercitationem saepe. Molestiae maxime incidunt
            suscipit placeat expedita veritatis voluptas et explicabo totam
            repellendus aspernatur labore cupiditate, quod omnis nemo porro
            voluptatem praesentium. Hic sed doloribus, in rem maiores accusamus
            eveniet, quisquam magnam facere explicabo iste ipsum vitae iusto
            dolorem, beatae ipsa libero perferendis doloremque itaque. Deleniti
            voluptatibus quae rem suscipit laudantium incidunt? Ducimus at iusto
            ea minima, maxime neque corporis cupiditate adipisci amet doloremque
            in unde! Quidem praesentium magni repudiandae, molestias accusamus
            harum id nesciunt natus cumque alias aperiam, adipisci ullam error.
            Quasi sed est vel iusto debitis eius hic quam accusantium! Provident
            doloremque assumenda iure? Odit quae est deserunt esse aperiam non
            placeat iste, in autem temporibus cum voluptates quis doloremque.
            Ipsam magni repudiandae aut recusandae repellat magnam tempora iusto
            assumenda nobis. Mollitia debitis in itaque enim fugiat doloremque
            illo adipisci, dolore temporibus optio, magnam eum. Saepe quod neque
            consequatur culpa. Qui quaerat, non aliquid neque beatae commodi
            quam, et facere quo est molestiae fuga iure odio eum modi voluptatem
            possimus magnam animi expedita itaque. Quisquam doloribus
            perferendis vel quas perspiciatis! Maxime perferendis eius officia
            eum. Quisquam cumque veritatis inventore temporibus assumenda illo
            eveniet error, fuga esse laboriosam ullam ipsum distinctio odio
            facilis necessitatibus deserunt nulla minus recusandae id dolor
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <BookMark />
              <LikeButton />
              <CommentCount />
            </div>
            <ShareButton />
          </div>
        </div>
      </div>
      <Comment />
    </div>
  );
}
export default ContentDetail;
