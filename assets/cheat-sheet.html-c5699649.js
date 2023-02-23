import{_ as t,V as o,W as r,X as e,Y as a,Z as s,$ as i,F as c}from"./framework-01d527df.js";const l={},d=e("h2",{id:"install",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),a(" Install")],-1),p={href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="configure-tooling" tabindex="-1"><a class="header-anchor" href="#configure-tooling" aria-hidden="true">#</a> Configure tooling</h2><blockquote><p>Configure user information for all local repositories</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;[name]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets the name you want attached to your commit transactions</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets the email you want attached to your commit transactions</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> color.ui auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Enables helpful colorization of command line output</p><h2 id="branches" tabindex="-1"><a class="header-anchor" href="#branches" aria-hidden="true">#</a> Branches</h2><blockquote><p>Branches are an important part of working with Git. Any commits you make will be made on the branch you’re currently “checked out” to. Use <code>git status</code> to see which branch that is.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Creates a new branch</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Switches to the specified branch and updates the working directory</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Combines the specified branch’s history into the current branch. This is usually done in pull requests, but is an important Git operation.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Deletes the specified branch</p><h2 id="make-changes" tabindex="-1"><a class="header-anchor" href="#make-changes" aria-hidden="true">#</a> Make changes</h2><blockquote><p>Browse and inspect the evolution of project files</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Lists version history for the current branch</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Lists version history for a file, beyond renames (works only for a single file)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Shows content differences between two branches</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Outputs metadata and content changes of the specified commit</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Snapshots the file in preparation for versioning</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;[descriptive message]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Records file snapshots permanently in version history</p><h2 id="redo-commits" tabindex="-1"><a class="header-anchor" href="#redo-commits" aria-hidden="true">#</a> Redo commits</h2><blockquote><p>Erase mistakes and craft replacement history</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Undoes all commits after [commit], preserving changes locally</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Discards all history and changes back to the specified commit</p>`,38),g={class:"hint-container danger"},m=e("p",{class:"hint-container-title"},"Warning",-1),b={href:"https://github.community/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="create-repositories" tabindex="-1"><a class="header-anchor" href="#create-repositories" aria-hidden="true">#</a> Create repositories</h2><blockquote><p>A new repository can either be created locally, or an existing repository can be cloned. When a repository was initialized locally, you have to push it to GitHub afterwards.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The git init command turns an existing directory into a new Git repository inside the folder you are running this command. After using the git init command, link the local repository to an empty GitHub repository using the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">add</span> origin <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Specifies the remote repository for your local repository. The url points to a repository on GitHub.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits</p><h2 id="the-gitignore-file" tabindex="-1"><a class="header-anchor" href="#the-gitignore-file" aria-hidden="true">#</a> The .gitignore file</h2>`,9),f={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"synchronize-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#synchronize-changes","aria-hidden":"true"},"#"),a(" Synchronize changes")],-1),y={href:"http://GitHub.com",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> fetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Downloads all history from the remote tracking branches</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Combines remote tracking branches into current local branch</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Uploads all local branch commits to GitHub</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. <strong>git pull is a combination of git fetch and git merge</strong></p><h2 id="glossary" tabindex="-1"><a class="header-anchor" href="#glossary" aria-hidden="true">#</a> Glossary</h2><ul><li><strong>git:</strong> an open source, distributed version-control system</li><li><strong>GitHub:</strong> a platform for hosting and collaborating on Git repositories</li><li><strong>commit:</strong> a Git object, a snapshot of your entire repository compressed into a SHA</li><li><strong>branch:</strong> a lightweight movable pointer to a commit</li><li><strong>clone:</strong> a local version of a repository, including all commits and branches</li><li><strong>remote:</strong> a common repository on GitHub that all team members use to exchange their changes</li><li><strong>fork:</strong> a copy of a repository on GitHub owned by a different user</li><li><strong>pull request:</strong> a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more</li><li><strong>HEAD:</strong> representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using git switch</li></ul>`,10);function _(w,$){const n=c("ExternalLinkIcon");return o(),r("div",null,[d,e("p",null,[a("GitHub Desktop："),e("a",p,[a("desktop.github.com"),s(n)])]),e("p",null,[a("Git for All Platforms："),e("a",u,[a("git-scm.com"),s(n)])]),h,e("div",g,[m,e("p",null,[a("CAUTION! Changing history can have nasty side effects. If you need to change commits that exist on GitHub (the remote), proceed with caution. If you need help, reach out at "),e("a",b,[a("github.community"),s(n)]),a(" or contact support.")])]),v,e("blockquote",null,[e("p",null,[a("Sometimes it may be a good idea to exclude files from being tracked with Git. This is typically done in a special file named .gitignore. You can find helpful templates for .gitignore files at "),e("a",f,[a("https://github.com/github/gitignore"),s(n)]),a(" .")])]),k,e("blockquote",null,[e("p",null,[a("Synchronize your local repository with the remote repository on "),e("a",y,[a("GitHub.com"),s(n)])])]),x])}const q=t(l,[["render",_],["__file","cheat-sheet.html.vue"]]);export{q as default};
