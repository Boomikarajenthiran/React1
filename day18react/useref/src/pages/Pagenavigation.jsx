
import { useRef } from "react"

const App = () => {

const homeref = useRef(null)

const aboutref = useRef(null)

const contactref = useRef(null)

const helpref = useRef(null)


const movetoHome = () =>{

homeref.current.scrollIntoView({behavior:'smooth'})

}
const movetoAbout = () =>{

  aboutref.current.scrollIntoView({behavior:'smooth'})
  
}
const movetoContact = () =>{

  contactref.current.scrollIntoView({behavior:'smooth'})
  
}
const movetoHelp = () =>{

  helpref.current.scrollIntoView({behavior:'smooth'})
  
}
  return (
<>

<div className="bg-black text-white flex justify-between p-2">

     <div >

          LOGO

     </div>

     <div className="flex gap-10 ">

           <button className=" bg-blue-400 rounded w-20" onClick={movetoHome}>HOME</button>
           <button className=" bg-blue-400 rounded w-20" onClick={movetoAbout}>ABOUT</button>
           <button className=" bg-blue-400 rounded w-20" onClick={movetoContact}>CONTACT</button>
           <button className=" bg-blue-400 rounded w-20" onClick={movetoHelp}>HELP</button>

     </div>

</div>

<section ref={homeref}>

<h1 className="text-2xl text-rose-500 font-bold">HOME</h1>

<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores repellat eligendi tempore dolore tenetur soluta fugiat repudiandae? Eos aut praesentium cumque ipsam quidem minima mollitia reiciendis. Sed fugiat vel ipsa.
Ipsa similique harum modi ea amet vitae placeat repellendus rerum ullam veritatis debitis doloremque, nulla unde ratione iusto laudantium possimus blanditiis nam itaque! Unde ipsam adipisci dolorem! Ipsa, eum deleniti?
Blanditiis, harum laborum vero adipisci, error aliquid doloremque est quam necessitatibus sit eligendi veniam totam quod voluptates mollitia delectus ullam aperiam itaque, voluptatum repudiandae? Molestiae at nam illo doloremque consectetur.
Id distinctio vero blanditiis, expedita veniam quos vel, illo at sunt neque, saepe nam veritatis asperiores! Qui iusto numquam soluta eveniet recusandae quis quos similique vitae libero. Id, beatae corporis.
Cum ullam odio praesentium amet esse reiciendis facere quam officia nesciunt magni quia, velit eos autem provident non consequuntur obcaecati perferendis suscipit delectus soluta aliquam. Dolorum fugiat et omnis facere.
Harum porro eveniet voluptas voluptatum, tempora in velit nemo error laudantium vero est minus iste, aliquid soluta sed modi quo optio voluptatem voluptates incidunt, et amet nesciunt! Reiciendis, fugit esse.
Aliquid sequi excepturi quasi dolorum pariatur, sit rerum praesentium sapiente laudantium iusto dolor architecto odio provident minima nihil velit at ex expedita cupiditate illum rem maxime? Praesentium ipsa aspernatur consequatur.
Hic accusamus sint dignissimos quia vitae facere repellendus, exercitationem assumenda dolorum? Voluptas quaerat quibusdam inventore reiciendis culpa dolorum alias neque eaque, explicabo sed perferendis ratione pariatur unde repudiandae mollitia saepe!
Numquam fugiat tenetur beatae excepturi maxime suscipit ipsum accusamus sed voluptates assumenda, ut, iste placeat eos asperiores, commodi voluptas rem laboriosam voluptatum consequatur? Iste non sapiente dolor quos alias ab.
Assumenda ratione cupiditate dolorem temporibus quod, cumque pariatur at, libero, reiciendis dignissimos blanditiis dolores voluptates nulla voluptas non corrupti exercitationem vitae iusto dolorum modi quam. Adipisci, quia consequuntur! Delectus, exercitationem.
Odio asperiores fugit aspernatur nobis beatae laborum error libero quis minus temporibus maxime culpa neque est veniam blanditiis nam, id assumenda optio doloremque nulla maiores repellat sapiente. Nobis, sapiente? Eius.
Rem adipisci, natus ad illum fuga necessitatibus aperiam voluptate dignissimos quos officia voluptatum, voluptatem dolorum, delectus nesciunt facilis. Autem velit doloremque quidem nulla quis magnam culpa delectus veritatis quaerat dignissimos.
Illum debitis dolor iste minus fuga perferendis a ad ut rerum pariatur laboriosam perspiciatis rem at eum consectetur soluta, qui voluptatem deserunt tempora libero? Accusantium delectus numquam alias est blanditiis.
Quidem quam laudantium dolor fugiat officiis, eveniet harum cumque culpa qui molestiae! Placeat quaerat id iste veniam non itaque, eaque, reiciendis mollitia a, incidunt optio ipsa nihil eveniet accusantium illo.
Deleniti, perspiciatis consequuntur hic molestias eum obcaecati impedit esse cum voluptatibus earum porro soluta laudantium. Necessitatibus nesciunt doloribus porro voluptatum consectetur quae cupiditate magni modi nostrum, odio qui, adipisci deserunt?
At, quae facere? Dignissimos, nobis. At aliquid est dolore doloribus unde nobis quisquam, quas corporis soluta voluptatibus cumque ad illum officia, ab, necessitatibus esse reiciendis veniam quibusdam amet nihil eligendi!
Minus vel quasi enim ea eveniet perspiciatis! Necessitatibus, quo ad placeat pariatur facilis aliquid, numquam beatae perferendis, quas itaque nobis inventore enim nam culpa neque voluptates! Expedita assumenda impedit incidunt!
Odio quasi aspernatur reprehenderit. Beatae dolor in quibusdam iste tempora deserunt magnam molestiae, porro optio dolorem vero enim labore eveniet adipisci, ea libero, provident ratione autem minus alias aspernatur iure!
Ab, autem ex. Id nisi necessitatibus rem fugiat fugit, quis ab ratione in minima sed nesciunt est blanditiis ipsam nulla impedit saepe consequatur tempora quae repudiandae quia. Eum, corporis beatae?
Eligendi cumque ab perferendis et expedita cum voluptate numquam non est amet, reprehenderit sed sit possimus, minus laboriosam maxime blanditiis laudantium natus impedit ducimus illo atque. Vel perferendis facere fuga.</p>

</section>

<section ref={aboutref}>

<h1 className="text-2xl text-rose-500 font-bold">ABOUT</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam est doloremque quae nesciunt, ipsa perferendis consequatur sit libero adipisci necessitatibus, tenetur enim quo. Dolores odit esse officia. Nihil, ipsum asperiores?
Ipsam, minus. Totam inventore perspiciatis corrupti facilis aut, error, nostrum molestias, aliquam eveniet architecto natus dolores. Ab asperiores quis velit tempora tenetur distinctio, quos voluptatem quibusdam sint voluptatum aspernatur a.
Beatae, dolore excepturi! Facere quos aspernatur eos esse temporibus iure totam impedit, alias doloremque ad nemo quo cum necessitatibus tenetur sit similique, nostrum commodi quasi fugiat laboriosam voluptatum. Animi, laudantium.
Minus possimus aut quidem. Error, necessitatibus ab quis consectetur eveniet cupiditate fugit quae est alias accusantium modi? Ratione ad, iste rem numquam exercitationem quae, ipsam placeat iusto officia, nam unde!
Maiores dolores iure molestiae magni, dolorem deleniti eum laborum, totam hic aliquid eius sint voluptatem. Odio velit officia sequi sunt totam. Earum rem voluptatem repellat cupiditate ut nam illo similique.
Veritatis, amet dolorum at assumenda incidunt maxime alias iste harum placeat provident accusamus animi magnam minus officia enim architecto itaque sunt ullam nostrum error esse pariatur cum. Neque, molestias illo!
Placeat, assumenda? Illo molestiae deleniti nihil laboriosam. Ratione ut, numquam quisquam omnis ducimus repellendus, nulla natus dolorum alias suscipit deserunt minima quia officia corrupti nemo facere magni voluptate impedit aut?
Unde ut ipsum voluptatem ducimus quisquam laborum in, mollitia ad ratione labore quia quasi earum. Expedita recusandae, iste perferendis doloremque doloribus, obcaecati, cupiditate at quaerat assumenda commodi optio architecto iure?
Natus temporibus asperiores ab placeat eaque id ad ex tempora quis quasi recusandae omnis molestiae autem iste perferendis culpa, dolor quaerat magnam qui praesentium commodi animi obcaecati corporis voluptatem. Magni.
Aspernatur quidem, dolorum neque voluptatem incidunt modi eius omnis quod! Molestias expedita, omnis aperiam ex, facilis et nobis, reprehenderit non quod inventore impedit nam accusantium dolorum hic quo ipsum vitae.
Accusantium atque adipisci fuga et modi est iste doloremque accusamus similique eaque, sunt in harum? Esse velit error iste aspernatur quam expedita? Totam culpa sunt velit molestias nobis accusantium a?
Nostrum placeat libero illo optio illum quidem! Exercitationem, in! Reiciendis maiores quas, placeat minus omnis debitis eligendi adipisci blanditiis doloremque ipsam excepturi, non minima, suscipit impedit expedita animi quos error!
Dicta, totam magnam suscipit cupiditate soluta nesciunt, non inventore similique quibusdam eveniet aspernatur quaerat sed repellendus. Recusandae eum explicabo vero eius in necessitatibus, saepe, dolorem quia officiis qui quod illo?
Eos, minima est similique, distinctio, in quo fugiat dolor facere reprehenderit reiciendis aperiam architecto quas! Earum voluptas sed, enim cumque corporis itaque deleniti perspiciatis nam assumenda quod libero quis! Illum.
Ipsa error id incidunt maiores officiis eum, repellendus reprehenderit necessitatibus aperiam esse minima nemo at mollitia explicabo quae unde eius ipsam accusamus quibusdam tenetur aliquam corporis ducimus debitis veritatis. Provident?
Earum asperiores dolor veritatis possimus culpa consequuntur! Id consectetur officiis necessitatibus illum quisquam dignissimos temporibus delectus laudantium nesciunt, eveniet facere voluptas vitae consequatur ea natus ad cupiditate eos, vel hic!
Soluta quibusdam magni ipsam nemo in. Obcaecati eos incidunt maxime odio, quos nulla deserunt cupiditate sapiente est? Est voluptates rerum, incidunt unde quas inventore commodi dolore delectus repudiandae, placeat quidem.
Cumque consequuntur non quis sunt quisquam repellat excepturi sit deserunt ea, quos laborum deleniti rem numquam maxime qui, culpa molestiae consectetur, cupiditate minima ipsa accusamus sed ut praesentium! Temporibus, ipsam.
Vel veritatis mollitia reiciendis ab repudiandae nihil eligendi soluta, eius doloremque ipsa possimus illum nisi dolorem id et recusandae repellat, facere exercitationem quod beatae ipsam illo! Hic incidunt officia assumenda.
Facere modi ex laudantium voluptatem distinctio? Accusamus itaque iusto accusantium assumenda deleniti incidunt dolorum, quam sit explicabo quod laudantium delectus sint nam beatae expedita, at rerum tempora, culpa quidem! Quod.</p>

</section>

<section ref={contactref}>

<h1 className="text-2xl text-rose-500 font-bold">CONTACT</h1>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor placeat delectus corrupti voluptates. Quas quo culpa possimus inventore et cumque nesciunt, dolorem aperiam consequuntur eaque aliquid dolores ut id error.
Ducimus, quae odio perspiciatis ipsa impedit alias mollitia facere consectetur, quam atque reprehenderit illum id debitis minima, ullam amet distinctio officiis repellat eius at quibusdam accusamus doloremque iste quas! Nam?
Vel explicabo magnam deserunt numquam sed cumque quia modi labore repudiandae aliquam fuga quos aliquid totam enim in iure, nulla deleniti adipisci, voluptatibus blanditiis dolorum. Quidem modi nesciunt numquam eos?
Ex doloribus ipsum obcaecati tempora beatae tempore architecto laboriosam? Iure voluptatum dolorum, obcaecati alias reprehenderit nihil voluptas ullam consequuntur expedita, corrupti commodi doloremque sit aliquid? Velit, architecto. Velit, eum ipsam!
Consequatur harum itaque mollitia adipisci qui nulla velit ea dicta delectus? Sequi facere rem fugit accusantium sit odio! Mollitia debitis explicabo minima ipsam adipisci similique rem sequi nulla accusamus ipsum.
Nihil eum fuga quam dolorum tempora maxime debitis. Molestiae nam exercitationem quos amet eum! Porro sed sit deserunt cupiditate, ipsum odit impedit quasi tempore inventore optio quia velit, illo ratione.
Voluptatibus maiores pariatur velit delectus perferendis veritatis rem itaque quas modi soluta illo mollitia ducimus, minus, perspiciatis consequatur! Aliquid eaque vero expedita temporibus saepe repellat deserunt, incidunt eos fuga beatae.
Dolorem aliquid obcaecati voluptatem blanditiis delectus natus nihil quis tenetur repellat ab, sit alias debitis doloribus temporibus earum iusto vel. Doloremque, voluptatem voluptates maxime quam inventore excepturi perspiciatis quis dolor?
Earum veritatis ducimus dolor. Animi laboriosam molestias, aut facilis eveniet quis ipsam minus assumenda, nesciunt fugiat atque! Eveniet cum, asperiores quis ea sapiente autem officiis saepe optio, illo, itaque eligendi.
Quas, ad amet. Adipisci aliquam fugit, nobis quos quibusdam facere vel repellat voluptatum! Quia, repellendus fugit delectus eaque vero ut ratione dolor quo doloremque blanditiis, unde illo, aperiam modi hic!
Aut unde atque eaque nulla consequatur quia at odio provident eveniet! Minus, mollitia quasi, nisi, voluptates debitis error officia eligendi reprehenderit voluptas quis sequi magnam a repudiandae enim est magni.
Ad illo, dignissimos odit consequatur quibusdam dolore quas reiciendis sequi recusandae, eaque sit beatae voluptatibus est harum. Ab excepturi iure repellendus nulla, ea ipsum dicta cupiditate non ex quo distinctio.
Ullam incidunt est perferendis. Nobis esse dicta laboriosam facere? Minima debitis voluptatum iste doloribus et deserunt impedit quasi qui ab veniam. Tempore accusamus facilis facere tenetur. Iste omnis excepturi voluptate!
Neque commodi, dolorem nam asperiores quis accusamus magni. Veniam laborum repellat quia dolor excepturi fuga itaque expedita maxime nulla, eaque quod veritatis aliquam suscipit assumenda tenetur eveniet quaerat harum cupiditate?
Reprehenderit animi assumenda debitis unde voluptas quo ex qui! Maxime nemo nesciunt rem at esse ut nihil quisquam illum commodi quam fugit, magni a quas, unde possimus provident maiores natus?
Voluptas dignissimos quae nulla nemo, voluptatem obcaecati at velit dolores distinctio tempora rem pariatur accusamus dolore quos incidunt unde blanditiis, laboriosam neque beatae. Est autem voluptates voluptatem ipsum sint quidem.
Sunt voluptatibus alias autem ullam blanditiis aliquam optio labore enim, obcaecati recusandae, adipisci debitis eveniet libero vel odio dolorum sequi! Obcaecati vero perspiciatis esse repellat provident molestias illum ipsum sapiente?
Corrupti aut soluta ipsum vitae omnis, magni ipsa! Sed quo, explicabo maiores aspernatur reiciendis quaerat et quod deserunt ipsum veniam in facilis recusandae molestias quis! Modi temporibus nihil eum ad?
Quae est, repellendus repudiandae accusamus saepe, at illo nesciunt sequi ipsam provident sit voluptas aliquam incidunt voluptatum asperiores, nostrum minus aut assumenda explicabo consequatur perferendis! Asperiores saepe quia velit vero.
Quod beatae ad tempora odit ab repellendus mollitia deserunt autem necessitatibus quos enim praesentium, asperiores tempore consectetur reiciendis, earum natus rem porro. Quasi veniam vero, iusto pariatur nulla nobis voluptatem?</p>

</section>

<section ref={helpref}>

<h1 className="text-2xl text-rose-500 font-bold">HELP</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur quo tenetur cum ab dignissimos asperiores a velit, porro vel, iure accusamus ad atque exercitationem odio fuga, doloribus beatae. Praesentium?
Cupiditate maiores vitae rem at architecto, nulla dolorem officiis quos doloremque voluptates provident perferendis consequuntur harum, facilis reprehenderit iure quidem minus esse autem. Quasi ut accusamus inventore eaque doloremque deserunt.
Officia laboriosam eos explicabo incidunt, est distinctio delectus perferendis atque beatae, saepe unde repellat voluptates repudiandae, dolore nesciunt iusto ab mollitia magnam! Dolorem nihil explicabo possimus tempore aspernatur quas odio.
Inventore veniam molestias, animi eaque blanditiis fugiat tempora nostrum sed neque accusantium corrupti repellendus voluptatibus quidem sit quibusdam totam provident mollitia ad, ducimus quia error atque eum eos? Esse, dolores!
Consectetur, quidem eos odio, doloribus ad deserunt recusandae molestiae pariatur dolorem impedit cupiditate eligendi sit suscipit nobis maxime. Suscipit optio corrupti impedit provident rerum voluptatem reprehenderit assumenda possimus eius quidem.
Nam deleniti doloremque illum architecto quasi veniam non dolorem necessitatibus suscipit, officiis maiores dolore temporibus. A neque nesciunt natus repellat nostrum dignissimos ab, maxime dicta distinctio eaque ipsam suscipit amet.
Iure atque odit perspiciatis ut. Facere id quia, excepturi ad officiis totam temporibus nostrum perspiciatis, blanditiis nemo rerum? Nam doloribus quas vitae facere. Reprehenderit quis eaque molestias in quod ipsa!
Aspernatur dolore omnis cum quo sequi aliquam, aliquid cupiditate quidem voluptatibus asperiores eveniet doloribus ut facilis repudiandae sint maiores, dolorem similique? Perspiciatis voluptates quisquam inventore deleniti, magni atque. Maiores, voluptates.
Eaque, voluptatibus odit, vitae velit culpa voluptas ab, blanditiis magni sit et quam numquam distinctio dolorum unde! Ducimus excepturi facilis consequuntur aliquam animi autem enim eum iste, qui explicabo blanditiis!
Aperiam nemo aspernatur vero velit sunt ipsum provident ad unde debitis laborum, iure, odit dolor earum fugiat vel. Distinctio veritatis perspiciatis, laudantium nesciunt ipsa id placeat culpa ullam doloribus nam.
Ab magnam, pariatur fugit atque quod quae eius voluptatem adipisci consectetur dolorum esse facilis exercitationem. Voluptas nulla nihil quam veniam aut explicabo iure, reiciendis perferendis, libero aliquid vitae, dolorem perspiciatis.
At fuga laudantium quis officia nam quibusdam, aperiam explicabo. Doloremque architecto aut atque iure magni numquam fuga eius at nihil cumque. Voluptas repellat deserunt, quibusdam dolorum earum labore eligendi accusantium?
Magni, suscipit! Laboriosam distinctio excepturi itaque aspernatur quod eius quos culpa, tenetur placeat nihil vero provident, animi beatae debitis id cum, delectus commodi molestiae nisi quibusdam sunt laborum autem aliquam?
Animi totam dolore vero id inventore consequuntur quisquam quo cumque maiores? Assumenda distinctio, modi, alias error vel corporis earum provident rerum officiis ipsam, eaque non corrupti rem delectus doloribus porro?
Earum a repellat reiciendis voluptatum beatae, sunt accusantium voluptatem numquam ab error illo, explicabo necessitatibus ipsa officia in quo nulla eius tempore dignissimos rem quos aperiam. Suscipit, et. Cumque, qui?
Quae minima reiciendis aspernatur, vitae odio possimus odit ipsam repellat voluptas commodi saepe iusto minus ex delectus nostrum numquam amet eius temporibus nihil officia libero nobis ad voluptate rem? Quaerat.
Quas, maxime laboriosam nulla ducimus corrupti officiis vel sunt esse suscipit, deserunt error sequi iste ab earum aliquam? Numquam, blanditiis beatae! Eos, unde. Fugiat ex, iste alias expedita quibusdam tempore.
Itaque nam voluptatum aspernatur! Fugit asperiores iure explicabo qui mollitia architecto sapiente facere amet. Iste rem aspernatur, vitae tempore possimus dolorem? Doloribus officia voluptatibus fugiat molestias praesentium, aliquid fugit sequi!
Aliquid nisi, animi exercitationem cum voluptatum nulla minus necessitatibus temporibus placeat similique quod ipsa voluptate odio nesciunt laudantium sapiente eos atque eum voluptas! Ex esse aliquam labore voluptatem aperiam consequatur?
Ipsam quasi porro, dolor voluptate illo sequi soluta accusantium sapiente repellat atque quos repellendus odio, esse dolorum? Ea fugiat esse quo repellat blanditiis, dicta libero natus. Aliquid laborum expedita sapiente.</p>

</section>



</>
  )
}

export default App
