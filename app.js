const projects = [
  {name:'LeRobot',org:'huggingface',cat:'具身智能',tags:['机器人','模仿学习','数据集'],desc:'面向真实机器人学习的完整工具链：采集数据、训练策略、部署与复现。',why:'快速上手'},
  {name:'OpenVLA',org:'openvla',cat:'具身智能',tags:['VLA','视觉语言动作','机器人'],desc:'开源视觉-语言-动作模型，把图像与自然语言指令直接转为机器人动作。',why:'前沿基线'},
  {name:'Isaac Lab',org:'isaac-sim',cat:'具身智能',tags:['仿真','RL','NVIDIA'],desc:'基于 NVIDIA Isaac Sim 的机器人学习框架，适合大规模强化学习与合成数据。',why:'工业级仿真'},
  {name:'ManiSkill',org:'haosulab',cat:'具身智能',tags:['操作','仿真','基准'],desc:'机器人操控任务的高性能仿真与评测平台，研究复现友好。',why:'研究基准'},
  {name:'Diffusion Policy',org:'real-stanford',cat:'具身智能',tags:['扩散模型','操作','模仿学习'],desc:'用扩散策略解决视觉运动控制问题的经典开源实现。',why:'论文复现'},
  {name:'OpenPI',org:'Physical-Intelligence',cat:'具身智能',tags:['VLA','机器人','策略'],desc:'Physical Intelligence 发布的开源机器人基础模型与训练代码。',why:'新兴方向'},
  {name:'Ultralytics',org:'ultralytics',cat:'计算机视觉',tags:['YOLO','检测','部署'],desc:'业界最易上手的 YOLO 训练、推理和部署工具链，覆盖检测、分割与姿态。',why:'工程首选'},
  {name:'Segment Anything',org:'facebookresearch',cat:'计算机视觉',tags:['分割','基础模型','SAM'],desc:'Meta 开源的通用图像分割模型，为视觉应用提供强大的交互式分割能力。',why:'视觉基石'},
  {name:'MMDetection',org:'open-mmlab',cat:'计算机视觉',tags:['检测','PyTorch','研究'],desc:'模块化目标检测工具箱，汇集丰富模型和配置，是 CV 研究复现的重要平台。',why:'模型丰富'},
  {name:'PaddleOCR',org:'PaddlePaddle',cat:'计算机视觉',tags:['OCR','文档理解','中文'],desc:'高精度、多语言 OCR 与文档解析工具，中文场景尤其成熟。',why:'中文友好'},
  {name:'Detectron2',org:'facebookresearch',cat:'计算机视觉',tags:['检测','分割','PyTorch'],desc:'Meta AI 的现代视觉识别库，适合构建和研究检测、实例分割任务。',why:'经典框架'},
  {name:'ComfyUI',org:'Comfy-Org',cat:'计算机视觉',tags:['生成图像','工作流','节点'],desc:'可视化节点式生成式图像工作流，方便组合模型、控制器和推理流程。',why:'创作工具'},
  {name:'Transformers',org:'huggingface',cat:'大模型 / NLP',tags:['LLM','模型库','Python'],desc:'预训练模型生态的核心入口，加载、微调和部署文本、多模态模型的标准工具。',why:'生态核心'},
  {name:'vLLM',org:'vllm-project',cat:'大模型 / NLP',tags:['推理','服务','高吞吐'],desc:'面向大语言模型的高吞吐推理和服务引擎，支持高效连续批处理。',why:'生产部署'},
  {name:'llama.cpp',org:'ggml-org',cat:'大模型 / NLP',tags:['本地模型','C++','量化'],desc:'在消费级硬件上高效运行量化 LLM 的轻量级 C/C++ 实现。',why:'本地优先'},
  {name:'Qwen',org:'QwenLM',cat:'大模型 / NLP',tags:['中文','LLM','多模态'],desc:'通义千问系列开源模型与工具，中文、多语言和多模态能力均衡。',why:'中文基座'},
  {name:'OpenAI Cookbook',org:'openai',cat:'大模型 / NLP',tags:['API','示例','最佳实践'],desc:'围绕 OpenAI API 的官方示例与实践指南，覆盖构建、评估和多模态任务。',why:'官方指南'},
  {name:'LLaVA',org:'haotian-liu',cat:'多模态',tags:['视觉语言','VLM','对话'],desc:'视觉指令微调的重要开源路线，提供图文理解、多模态对话的研究起点。',why:'多模态入门'},
  {name:'InternVL',org:'OpenGVLab',cat:'多模态',tags:['VLM','文档','视觉语言'],desc:'高性能视觉语言模型系列，覆盖图文理解、OCR 与多模态对话。',why:'综合能力'},
  {name:'MCP',org:'modelcontextprotocol',cat:'Agent',tags:['工具调用','协议','生态'],desc:'让 AI 应用以统一方式连接外部工具与数据源的开放协议及参考实现。',why:'生态标准'},
  {name:'OpenAI Agents SDK',org:'openai',cat:'Agent',tags:['Agent','编排','Python'],desc:'用于构建多智能体工作流、工具调用与可观测性的轻量级官方 SDK。',why:'可靠编排'},
  {name:'AutoGen',org:'microsoft',cat:'Agent',tags:['多智能体','自动化','研究'],desc:'微软开源的多智能体对话与协作框架，适合探索角色分工和自动化流程。',why:'多 Agent'},
  {name:'Dify',org:'langgenius',cat:'Agent',tags:['LLMOps','工作流','应用'],desc:'可视化构建、发布和运营 LLM 应用的平台，兼顾开发与产品团队。',why:'低代码应用'},
  {name:'LangChain',org:'langchain-ai',cat:'Agent',tags:['编排','RAG','集成'],desc:'连接语言模型、数据源和工具的应用框架，拥有广泛的第三方集成。',why:'集成丰富'},
  {name:'LlamaIndex',org:'run-llama',cat:'Agent',tags:['RAG','数据','检索'],desc:'以数据为中心的 LLM 应用框架，适合构建知识库、检索与智能体应用。',why:'RAG 专注'},
  {name:'Flowise',org:'FlowiseAI',cat:'Agent',tags:['可视化','RAG','工作流'],desc:'通过拖拽界面编排 LLM 流程，适合验证原型和团队协作。',why:'快速原型'},
  {name:'DSPy',org:'stanfordnlp',cat:'开发工具',tags:['提示优化','编程模型','评估'],desc:'用声明式方式编程语言模型，并通过数据与度量自动优化提示与模块。',why:'系统化优化'},
  {name:'LiteLLM',org:'BerriAI',cat:'开发工具',tags:['网关','多模型','成本'],desc:'统一调用多家 LLM 提供商的接口与代理层，便于路由、监控与成本控制。',why:'多模型管理'},
  {name:'Langfuse',org:'langfuse',cat:'开发工具',tags:['可观测性','评估','LLMOps'],desc:'开源 LLM 工程可观测平台，可追踪调用、提示、成本与评测。',why:'生产观测'},
  {name:'lm-evaluation-harness',org:'EleutherAI',cat:'开发工具',tags:['评测','基准','LLM'],desc:'广泛使用的语言模型评测框架，涵盖大量公开任务与可复现实验。',why:'严谨评估'},
  {name:'Ragas',org:'explodinggradients',cat:'开发工具',tags:['RAG','评估','质量'],desc:'专注 RAG 应用质量评测的框架，用数据驱动检索与生成链路的改进。',why:'RAG 评估'},
  {name:'Datasets',org:'huggingface',cat:'开发工具',tags:['数据集','数据处理','Hub'],desc:'高效加载、处理与共享机器学习数据集的标准库，和 Hub 紧密集成。',why:'数据入口'},
  {name:'PEFT',org:'huggingface',cat:'大模型 / NLP',tags:['微调','LoRA','高效训练'],desc:'参数高效微调方法的统一工具库，让资源有限的模型定制更可行。',why:'微调首选'},
  {name:'Axolotl',org:'axolotl-ai-cloud',cat:'大模型 / NLP',tags:['微调','训练','配置'],desc:'面向 LLM 微调的简洁训练工具，支持常用模型、数据格式和高效训练技术。',why:'训练上手'}
];
const categoryIcons={ '全部':'◌','具身智能':'◉','计算机视觉':'◈','大模型 / NLP':'∿','多模态':'◐','Agent':'✦','开发工具':'⌘' };
const projectUrls={
  'LeRobot':'https://github.com/huggingface/lerobot','OpenVLA':'https://github.com/openvla/openvla','Isaac Lab':'https://github.com/isaac-sim/IsaacLab','ManiSkill':'https://github.com/haosulab/ManiSkill','Diffusion Policy':'https://github.com/real-stanford/diffusion_policy','OpenPI':'https://github.com/Physical-Intelligence/openpi',
  'Ultralytics':'https://github.com/ultralytics/ultralytics','Segment Anything':'https://github.com/facebookresearch/segment-anything','MMDetection':'https://github.com/open-mmlab/mmdetection','PaddleOCR':'https://github.com/PaddlePaddle/PaddleOCR','Detectron2':'https://github.com/facebookresearch/detectron2','ComfyUI':'https://github.com/Comfy-Org/ComfyUI',
  'Transformers':'https://github.com/huggingface/transformers','vLLM':'https://github.com/vllm-project/vllm','llama.cpp':'https://github.com/ggml-org/llama.cpp','Qwen':'https://github.com/QwenLM/Qwen','OpenAI Cookbook':'https://github.com/openai/openai-cookbook','LLaVA':'https://github.com/haotian-liu/LLaVA','InternVL':'https://github.com/OpenGVLab/InternVL',
  'MCP':'https://github.com/modelcontextprotocol','OpenAI Agents SDK':'https://github.com/openai/openai-agents-python','AutoGen':'https://github.com/microsoft/autogen','Dify':'https://github.com/langgenius/dify','LangChain':'https://github.com/langchain-ai/langchain','LlamaIndex':'https://github.com/run-llama/llama_index','Flowise':'https://github.com/FlowiseAI/Flowise',
  'DSPy':'https://github.com/stanfordnlp/dspy','LiteLLM':'https://github.com/BerriAI/litellm','Langfuse':'https://github.com/langfuse/langfuse','lm-evaluation-harness':'https://github.com/EleutherAI/lm-evaluation-harness','Ragas':'https://github.com/explodinggradients/ragas','Datasets':'https://github.com/huggingface/datasets','PEFT':'https://github.com/huggingface/peft','Axolotl':'https://github.com/axolotl-ai-cloud/axolotl'
};
let activeCategory='全部', onlyFavorites=false, sortMode='推荐', favorites=new Set(JSON.parse(localStorage.getItem('ai-radar-favorites')||'[]'));
const categories=['全部',...new Set(projects.map(p=>p.cat))];
const grid=document.querySelector('#projectGrid'),filters=document.querySelector('#filters'),resultCount=document.querySelector('#resultCount');
document.querySelector('#projectCount').textContent=projects.length;
function renderFilters(){filters.innerHTML=categories.map(c=>`<button class="${c===activeCategory?'active':''}" data-category="${c}">${categoryIcons[c]} ${c}</button>`).join('');}
function filtered(){const query=document.querySelector('#searchInput').value.trim().toLowerCase();let list=projects.filter(p=>(activeCategory==='全部'||p.cat===activeCategory)&&(!onlyFavorites||favorites.has(p.name))&&(`${p.name} ${p.org} ${p.cat} ${p.tags.join(' ')} ${p.desc} ${p.why}`.toLowerCase().includes(query)));if(sortMode==='名称')list=[...list].sort((a,b)=>a.name.localeCompare(b.name));if(sortMode==='分类')list=[...list].sort((a,b)=>a.cat.localeCompare(b.cat));return list}
function render(){const list=filtered();resultCount.textContent=`显示 ${list.length} / ${projects.length} 个项目`;grid.innerHTML=list.map(p=>`<article class="project-card"><div class="card-top"><span class="category">${p.cat.toUpperCase()}</span><button class="favorite ${favorites.has(p.name)?'active':''}" data-favorite="${p.name}" aria-label="收藏 ${p.name}" aria-pressed="${favorites.has(p.name)}">${favorites.has(p.name)?'★':'☆'}</button></div><h3>${p.name}</h3><p>${p.desc}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><div class="card-footer"><a href="${projectUrls[p.name]}" target="_blank" rel="noreferrer">查看 GitHub ↗</a><span>${p.why}</span></div></article>`).join('');document.querySelector('#emptyState').hidden=Boolean(list.length);grid.hidden=!list.length}
filters.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;activeCategory=b.dataset.category;renderFilters();render()});
document.querySelector('#searchInput').addEventListener('input',render);
grid.addEventListener('click',e=>{const b=e.target.closest('[data-favorite]');if(!b)return;const n=b.dataset.favorite;favorites.has(n)?favorites.delete(n):favorites.add(n);localStorage.setItem('ai-radar-favorites',JSON.stringify([...favorites]));render()});
document.querySelector('#favoriteFilter').addEventListener('click',e=>{onlyFavorites=!onlyFavorites;e.currentTarget.setAttribute('aria-pressed',onlyFavorites);e.currentTarget.textContent=onlyFavorites?'★ 只看收藏':'☆ 只看收藏';render()});
document.querySelector('#sortButton').addEventListener('click',e=>{sortMode=sortMode==='推荐'?'名称':sortMode==='名称'?'分类':'推荐';e.currentTarget.innerHTML=`${sortMode}排序 <span>⇅</span>`;render()});
document.querySelector('#resetButton').addEventListener('click',()=>{activeCategory='全部';onlyFavorites=false;document.querySelector('#searchInput').value='';document.querySelector('#favoriteFilter').setAttribute('aria-pressed','false');document.querySelector('#favoriteFilter').textContent='☆ 只看收藏';renderFilters();render()});
document.querySelector('#randomButton').addEventListener('click',()=>{const p=projects[Math.floor(Math.random()*projects.length)];activeCategory=p.cat;document.querySelector('#searchInput').value=p.name;renderFilters();render();document.querySelector('#radar').scrollIntoView({behavior:'smooth'})});
renderFilters();render();
