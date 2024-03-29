
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */

(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://web1-jpw39gzev5.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

let observer = new IntersectionObserver((e)=>{
    e.forEach((icon)=>{
        if (icon.isIntersecting){
            icon.target.style.opacity = 1;
        } else{
            icon.target.style.opacity = 0;
        }
    })
})

var bd = document.getElementsByClassName("bd");
console.log(bd);
observer.observe(bd[0]);
observer.observe(bd[1]);
