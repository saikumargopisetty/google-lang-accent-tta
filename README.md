# google-lang-accent-tta

This is an simple script to generate audios from text, Using public Google Translater Language accent APIs.
		

<h4>HOW TO INSTALL</h4><hr><div class="highlight javascript"><pre class="editor editor-colors"><div class="line"><span class="source js"><span>npm&nbsp;install&nbsp;</span><span class="keyword operator js"><span>--</span></span><span>save&nbsp;google</span><span class="keyword operator js"><span>-</span></span><span>lang</span><span class="keyword operator js"><span>-</span></span><span>accent</span><span class="keyword operator js"><span>-</span></span><span>tta</span></span></div></pre></div>

<h2><a id="user-content-usage" class="deep-link" href="#usage" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>




<h3><a id="user-content-get-mp3---callback" class="deep-link" href="#get-mp3---callback" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> getMp3 - callback</h3>

<pre><code class="language-sh">var gLangTxtomp3 = require(<span class="hljs-string">"google-text-to-audio"</span>);

gLangTxtomp3.getMp3(<span class="hljs-string">"Bienvenido al paquete de acento npm del idioma de google"</span>, <span class="hljs-string">"es"</span>, <span class="hljs-keyword">function</span>(err, binaryStream){

  <span class="hljs-keyword">if</span>(err){
    console.log(err);
    <span class="hljs-built_in">return</span>;
  }
  var file = fs.createWriteStream(<span class="hljs-string">"public/audio/FileName.mp3"</span>); // write it down the file
  file.write(binaryStream);
  file.end();
});
</code></pre>




<h3><a id="user-content-get-mp3---callback" class="deep-link" href="#get-mp3---callback" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> getMp3  - Promise</h3>


<pre><code class="language-sh">var gLangTxtomp3 = require(<span class="hljs-string">"google-text-to-audio"</span>);

gLangTxtomp3.getMp3(<span class="hljs-string">"Welcome to google language accent npm package"</span>,<span class="hljs-string">"en"</span>).then(<span class="hljs-keyword">function</span>(binaryStream){

    var file = fs.createWriteStream(<span class="hljs-string">"public/audio/FileName.mp3"</span>); // write it down the file
    file.write(binaryStream);
    file.end();
    
})
.catch(<span class="hljs-keyword">function</span>(err){
    console.log(<span class="hljs-string">"Error"</span>, err);
});
</code></pre>



<h3><a id="user-content-get-mp3---callback" class="deep-link" href="#get-mp3---callback" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> saveMP3 - callback</h3>






<pre><code class="language-sh">var gLangTxtomp3 = require(<span class="hljs-string">"google-text-to-audio"</span>);

gLangTxtomp3.saveMP3(Bienvenido al paquete de acento npm del idioma de google<span class="hljs-string">","</span>es<span class="hljs-string">", "</span>spanish_text<span class="hljs-string">","</span>audio<span class="hljs-string">", function(err, absoluteFilePath){
  if(err){
    console.log(err);
    return;
  }
  console.log("</span>File saved :<span class="hljs-string">", absoluteFilePath); 
});
</span></code></pre>



<h3><a id="user-content-get-mp3---callback" class="deep-link" href="#get-mp3---callback" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> saveMP3 - promise</h3>





<pre><code class="language-sh">var gLangTxtomp3 = require(<span class="hljs-string">"google-text-to-audio"</span>);

gLangTxtomp3.saveMP3(<span class="hljs-string">"Bienvenido al paquete de acento npm del idioma de google"</span>,<span class="hljs-string">"es"</span>, <span class="hljs-string">"spanish_text"</span>,<span class="hljs-string">"audio"</span>).then(<span class="hljs-keyword">function</span>(absoluteFilePath){ 
    console.log(<span class="hljs-string">"File saved :"</span>, absoluteFilePath); //<span class="hljs-string">"File saved : 
})
.catch(function(err){
    console.log("</span>Error<span class="hljs-string">", err);
});
</span></code></pre>



<h3><a id="user-content-get-mp3---callback" class="deep-link" href="#get-mp3---callback" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> Credits</h3>



<p>Javascript Developer - Saikumar Gopisetty (@saikumargopisetty)</p>

<p>Any queries please drop mail(saikumaar.gopisetty@gmail.com)</p>









