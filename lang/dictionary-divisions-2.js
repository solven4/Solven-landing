/* ============================================================
   SOLVEN4 — EN → AR dictionary, chunk 6: "How It Works" steps for
   all 24 division sub-feature pages, plus their titles promoted to
   `common` so they also translate when they appear as "Other
   [Division] Services" links on sibling pages.
   ============================================================ */
(function () {
  var D = window.SOLVEN4_DICT || (window.SOLVEN4_DICT = { common: {}, pages: {} });

  Object.assign(D.common, {
    "AI Trading Coach": "مدرب التداول الذكي",
    "MT5 Live Sync & Copy Trading": "مزامنة MT5 المباشرة ونسخ الصفقات",
    "Signals & Leaderboard": "الإشارات ولوحة المتصدرين",
    "Trading DNA Score": "بصمة التداول",
    "Prop Firm Risk Room": "غرفة مخاطر البروب فيرم",
    "Journal & Trade History": "سجل التداول والصفقات",
    "Lead Pipeline & Kanban": "مسار العملاء المحتملين ولوحة كانبان",
    "AI Lead Scoring": "تقييم العملاء المحتملين بالذكاء الاصطناعي",
    "Commission & Finance Tracking": "تتبع العمولات والماليات",
    "Automation Center": "مركز الأتمتة",
    "WhatsApp & Telegram Outreach": "التواصل عبر واتساب وتيليجرام",
    "MT4 Sync & Social Hub": "مزامنة MT4 ومركز التواصل الاجتماعي",
    "Command Center Dashboard": "لوحة مركز القيادة",
    "Leads & Contacts": "العملاء المحتملون وجهات الاتصال",
    "AI Business Agent": "الوكيل التجاري الذكي",
    "Commissions & Network": "العمولات والشبكة",
    "Social, WhatsApp & Telegram": "التواصل الاجتماعي وواتساب وتيليجرام",
    "Arena & Knowledge Base": "الساحة وقاعدة المعرفة",
    "Intelligence Dashboard": "لوحة الاستخبارات السوقية",
    "Macro Data": "بيانات الاقتصاد الكلي",
    "SOLVEN AI Assistant": "مساعد SOLVEN الذكي",
    "Academy Courses": "دورات الأكاديمية",
    "Daily Briefings": "الموجزات اليومية",
    "Market Data & News": "بيانات السوق والأخبار"
  });

  function ext(page, obj) {
    D.pages[page] = Object.assign(D.pages[page] || {}, obj);
  }

  ext("solven4-edge-ai-trading-coach.html", {
    "Build up some trade and journal history": "اجمع بعض سجل الصفقات والتوثيق",
    "The more data the Coach has, the more specific and accurate its answers become.": "كلما زادت البيانات المتاحة للمدرب، أصبحت إجاباته أكثر دقة وتحديداً.",
    "Ask a direct question": "اطرح سؤالاً مباشراً",
    "\"Why did my win rate drop in March?\" or \"Am I sizing up after losses?\" both work well as starting points.": "\"لماذا انخفضت نسبة فوزي في مارس؟\" أو \"هل أزيد حجم صفقاتي بعد الخسائر؟\" كلاهما نقطة بداية جيدة.",
    "Follow up": "تابع بأسئلة إضافية",
    "Treat it like a conversation — ask it to go deeper on any answer that raises a new question.": "تعامل معه كمحادثة — اطلب التعمّق في أي إجابة تثير سؤالاً جديداً.",
    "Turn a repeated insight into a rule": "حوّل الملاحظة المتكررة إلى قاعدة",
    "If the Coach flags the same pattern more than once, it's usually worth encoding as an actual guardrail.": "إذا رصد المدرب نفس النمط أكثر من مرة، يستحق الأمر عادة تحويله إلى قاعدة فعلية تلتزم بها."
  });

  ext("solven4-edge-journal-trade-history.html", {
    "Connect your MT5 account": "اربط حساب MT5 الخاص بك",
    "Once synced, every trade you close starts flowing into your journal automatically.": "بمجرد المزامنة، تبدأ كل صفقة تغلقها بالتدفق إلى سجلك تلقائياً.",
    "Review your automatic entries": "راجع الإدخالات التلقائية",
    "Each entry already has entry/exit price, size, duration and timing filled in.": "كل إدخال مكتمل مسبقاً بسعر الدخول والخروج والحجم والمدة والتوقيت.",
    "Add context while it's fresh": "أضف السياق وأنت لا تزال تتذكره",
    "Attach a note on setup, mindset or rule-following right after closing a trade — the data's already there, the note adds the why.": "أضف ملاحظة عن الإعداد أو الحالة الذهنية أو الالتزام بالقواعد فور إغلاق الصفقة — البيانات موجودة بالفعل، والملاحظة تضيف السبب.",
    "Use it in your weekly review": "استخدمه في مراجعتك الأسبوعية",
    "A consistent journal is most valuable read back over time — pair it with your Trading DNA report for a fuller picture.": "قيمة السجل المنتظم تظهر عند قراءته بمرور الوقت — اقرنه بتقرير بصمة التداول للحصول على صورة أوضح."
  });

  ext("solven4-edge-mt5-sync-copy-trading.html", {
    "Download the Solven4 EA": "حمّل مستشار سولفن4 الخبير",
    "From your EDGE dashboard, download the Expert Advisor built for MetaTrader 5.": "من لوحة EDGE الخاصة بك، حمّل المستشار الخبير المصمَّم لميتاتريدر 5.",
    "Install it in your MT5 terminal": "ثبّته في منصة MT5 الخاصة بك",
    "Copy the EA into your terminal's MQL5/Experts folder and attach it to any chart.": "انسخ المستشار الخبير إلى مجلد MQL5/Experts في منصتك، وأرفقه بأي رسم بياني.",
    "Paste in your personal API token": "الصق رمز API الشخصي الخاص بك",
    "Open the EA's settings and paste in the token generated from your Solven4 account — no broker password required.": "افتح إعدادات المستشار الخبير والصق الرمز المُولَّد من حسابك في سولفن4 — لا حاجة لكلمة مرور الوسيط.",
    "Watch it sync in real time": "شاهد المزامنة تتم لحظياً",
    "Every trade, balance change and account event now flows into EDGE continuously.": "تتدفق الآن كل صفقة وتغيّر في الرصيد وحدث في الحساب إلى EDGE باستمرار."
  });

  ext("solven4-edge-prop-firm-risk-room.html", {
    "Build enough trade history in EDGE": "ابنِ سجل صفقات كافياً في EDGE",
    "The simulation is only as good as the behavioral data behind it — a longer, real history gives a more reliable estimate.": "دقة المحاكاة تعتمد على البيانات السلوكية وراءها — سجل حقيقي أطول يعطي تقديراً أكثر موثوقية.",
    "Select the challenge you're considering": "اختر التحدي الذي تفكر فيه",
    "Choose the prop firm and rule set (daily loss, max drawdown, profit target) you want to test against.": "اختر شركة البروب فيرم ومجموعة القواعد (الخسارة اليومية، أقصى تراجع، هدف الربح) التي تريد الاختبار مقابلها.",
    "Run the 500-path simulation": "شغّل محاكاة الـ500 مسار",
    "The Risk Room simulates your trading style forward hundreds of times under those exact rules.": "تحاكي غرفة المخاطر أسلوب تداولك مئات المرات وفق تلك القواعد بالذات.",
    "Read your estimated pass rate": "اطّلع على نسبة نجاحك المقدَّرة",
    "See the percentage of simulated paths that would have passed — and which specific rule caused the most failures, if any.": "اطّلع على نسبة المسارات المحاكاة التي كانت ستنجح — وأي قاعدة تحديداً تسببت في أكبر عدد من الإخفاقات، إن وُجدت."
  });

  ext("solven4-edge-signals-leaderboard.html", {
    "Sync a verified MT5 account": "زامن حساب MT5 موثّقاً",
    "Leaderboard eligibility and signal listing both require a synced, verified trade history.": "الأهلية للوحة المتصدرين وإدراج الإشارات كلاهما يتطلب سجل صفقات متزامناً وموثّقاً.",
    "Let enough history accumulate": "دع سجلاً كافياً يتراكم",
    "A single strong week isn't a track record — ranking and listing both weigh consistency over time.": "أسبوع قوي واحد ليس سجلاً — الترتيب والإدراج كلاهما يزنان الاتساق عبر الزمن.",
    "Browse or list on the marketplace": "تصفّح أو أدرِج في السوق",
    "Follow a ranked strategy that matches your risk tolerance, or list your own once eligible.": "تابع استراتيجية مصنّفة تناسب تحمّلك للمخاطر، أو أدرِج استراتيجيتك بمجرد التأهّل.",
    "Track results transparently": "تابع النتائج بشفافية",
    "Both your own and any followed strategy's performance stay visible and synced, not static.": "أداؤك وأداء أي استراتيجية تتابعها يبقيان ظاهرين ومتزامنين، لا ثابتين."
  });

  ext("solven4-edge-trading-dna-score.html", {
    "Log at least 5 closed trades": "سجّل 5 صفقات مغلقة على الأقل",
    "Trading DNA needs a minimum sample before it can compute meaningful scores rather than noise.": "تحتاج بصمة التداول حداً أدنى من العينات لحساب درجات ذات معنى بدلاً من ضجيج عشوائي.",
    "Open your Trading DNA report": "افتح تقرير بصمة التداول الخاص بك",
    "See all 8 dimensions scored side by side, with the ones furthest from your baseline highlighted.": "اطّلع على الأبعاد الثمانية جنباً إلى جنب، مع تمييز الأبعد عن خط أساسك.",
    "Read the trend, not just the score": "اقرأ الاتجاه، لا الدرجة فقط",
    "A single score matters less than whether it's improving or slipping over your last several weeks.": "الدرجة الواحدة أقل أهمية من كونها تتحسن أو تتراجع خلال أسابيعك الأخيرة.",
    "Ask the Coach to explain any score": "اسأل المدرب عن شرح أي درجة",
    "If a dimension doesn't make sense, the AI Trading Coach can walk through exactly which trades are driving it.": "إذا لم يكن بُعد ما واضحاً، يمكن لمدرب التداول الذكي أن يوضّح بالضبط الصفقات التي تقف وراءه."
  });

  ext("solven4-forge-ai-lead-scoring.html", {
    "Leads enter the pipeline": "يدخل العملاء المحتملون المسار",
    "Every new lead is automatically evaluated as it's captured.": "يُقيَّم كل عميل محتمل جديد تلقائياً فور تسجيله.",
    "Scoring updates continuously": "التقييم يتحدث باستمرار",
    "As a lead engages, responds, or goes quiet, its score adjusts to reflect current likelihood to convert.": "مع تفاعل العميل المحتمل أو رده أو صمته، تتعدل درجته لتعكس احتمالية تحوّله الحالية.",
    "Sort your work by score": "رتّب عملك حسب الدرجة",
    "Start each day with your highest-priority leads rather than working the pipeline in arrival order.": "ابدأ كل يوم بالعملاء المحتملين الأعلى أولوية بدلاً من العمل بترتيب الوصول.",
    "Combine with automation": "ادمج مع الأتمتة",
    "Feed your top-scored leads into targeted outreach sequences from the Automation Center.": "غذِّ العملاء المحتملين الأعلى تقييماً في تسلسلات تواصل مستهدفة من مركز الأتمتة."
  });

  ext("solven4-forge-automation-center.html", {
    "Enable the agents relevant to you": "فعّل الوكلاء المناسبين لك",
    "Turn on lead scoring, churn detection, reporting, and content generation individually as needed.": "فعّل تقييم العملاء المحتملين، ورصد التسرّب، والتقارير، وإنشاء المحتوى كل على حدة بحسب الحاجة.",
    "Let them run in the background": "دعهم يعملون في الخلفية",
    "Agents process new leads, monitor engagement, and generate drafts continuously.": "يعالج الوكلاء العملاء المحتملين الجدد، ويراقبون التفاعل، وينشئون مسودات باستمرار.",
    "Review before anything client-facing goes out": "راجع قبل إرسال أي شيء موجّه للعملاء",
    "Outreach content and reports are drafted for your review, not sent automatically without oversight.": "محتوى التواصل والتقارير تُصاغ لمراجعتك، لا تُرسل تلقائياً دون إشراف.",
    "Refine over time": "تحسّن مع الوقت",
    "Agents improve in usefulness as they have more of your business's activity to work from.": "يزداد الوكلاء فائدة كلما توفر لهم مزيد من نشاط عملك للعمل عليه."
  });

  ext("solven4-forge-commission-finance-tracking.html", {
    "Convert leads into tracked clients": "حوّل العملاء المحتملين إلى عملاء متابَعين",
    "Once a lead converts in your pipeline, their trading activity feeds into your commission dashboard.": "بمجرد تحوّل عميل محتمل في مسارك، يُغذّي نشاطه التداولي لوحة عمولاتك.",
    "Monitor gross commission and volume": "راقب إجمالي العمولة والحجم",
    "See earnings and the network volume driving them update as activity happens.": "شاهد الأرباح وحجم الشبكة الدافع لها يتحدثان فور حدوث النشاط.",
    "Track pending vs. paid": "تابع المعلَّق مقابل المدفوع",
    "Know exactly what's been paid out and what's still outstanding at any moment.": "اعرف بدقة ما دُفع وما لا يزال مستحقاً في أي لحظة.",
    "Reconcile with confidence": "وفّق حساباتك بثقة",
    "Trace any commission figure back to the specific client or referral relationship behind it.": "تتبع أي رقم عمولة حتى العميل أو علاقة الإحالة المحددة وراءه."
  });

  ext("solven4-forge-lead-pipeline-kanban.html", {
    "Capture a lead": "سجّل عميلاً محتملاً",
    "From a direct import, a WhatsApp/Telegram conversation, or a manual add, every lead enters the pipeline at the 'new' stage.": "من استيراد مباشر، أو محادثة واتساب/تيليجرام، أو إضافة يدوية، يدخل كل عميل محتمل المسار في مرحلة \"جديد\".",
    "Move it through stages": "انقله عبر المراحل",
    "Drag a lead from new to contacted, qualified, negotiating, or converted as the relationship progresses.": "اسحب العميل المحتمل من جديد إلى تم التواصل، مؤهَّل، قيد التفاوض، أو محوَّل مع تقدم العلاقة.",
    "Let scoring guide priority": "دع التقييم يوجّه الأولوية",
    "AI lead scoring (see the next service) tells you which leads in each stage are worth working first.": "تقييم العملاء المحتملين بالذكاء الاصطناعي يخبرك بمن يستحق العمل عليه أولاً في كل مرحلة.",
    "Convert and carry forward": "حوّل وانتقل قدماً",
    "Once a lead converts, their activity flows naturally into commission and finance tracking.": "بمجرد تحوّل العميل المحتمل، يتدفق نشاطه بشكل طبيعي إلى تتبع العمولات والماليات."
  });

  ext("solven4-forge-mt4-sync-social-hub.html", {
    "Sync client MT4 accounts": "زامن حسابات MT4 للعملاء",
    "Referred clients connect via the same secure EA-based method used across Solven4 — no shared passwords.": "يتصل العملاء المُحالون عبر نفس الطريقة الآمنة القائمة على المستشار الخبير المستخدمة عبر سولفن4 — دون مشاركة كلمات مرور.",
    "Monitor network activity": "راقب نشاط الشبكة",
    "See client trading data alongside your pipeline and commission dashboard.": "اطّلع على بيانات تداول العملاء إلى جانب لوحة مسارك وعمولاتك.",
    "Plan and publish content": "خطّط وانشر المحتوى",
    "Use the Social Hub to schedule and publish posts across your channels.": "استخدم مركز التواصل الاجتماعي لجدولة ونشر المنشورات عبر قنواتك.",
    "Keep business and brand aligned": "حافظ على تناغم العمل والعلامة التجارية",
    "Reference real client activity and results directly in the content you publish.": "أشِر إلى نشاط ونتائج العملاء الحقيقية مباشرة في المحتوى الذي تنشره."
  });

  ext("solven4-forge-whatsapp-telegram-outreach.html", {
    "Connect your WhatsApp/Telegram": "اربط واتساب/تيليجرام الخاص بك",
    "Link the channels your business already uses for client and prospect communication.": "اربط القنوات التي يستخدمها عملك بالفعل للتواصل مع العملاء والعملاء المحتملين.",
    "Capture leads automatically": "اجذب عملاء محتملين تلقائياً",
    "New contacts messaging in are added to your pipeline and scored like any other lead.": "جهات الاتصال الجديدة التي تراسلك تُضاف إلى مسارك وتُقيَّم كأي عميل محتمل آخر.",
    "Send broadcasts": "أرسل رسائل جماعية",
    "Reach your list directly through the channel your audience actually checks.": "تواصل مع قائمتك مباشرة عبر القناة التي يتابعها جمهورك فعلياً.",
    "Track it all in one place": "تابع كل ذلك في مكان واحد",
    "Every conversation feeds the same pipeline, scoring, and commission system as your other lead sources.": "كل محادثة تُغذّي نفس نظام المسار والتقييم والعمولات مثل مصادر عملائك المحتملين الأخرى."
  });

  ext("solven4-nexus-ai-business-agent.html", {
    "Ask a direct question": "اطرح سؤالاً مباشراً",
    "\"How's business this week?\" or \"What's my commission recap?\" both work as starting points.": "\"كيف العمل هذا الأسبوع؟\" أو \"ما مراجعة عمولاتي؟\" كلاهما نقطة بداية جيدة.",
    "Request a draft": "اطلب مسودة",
    "Ask for a broadcast, an update for your network, or outreach copy grounded in your actual data.": "اطلب رسالة جماعية، أو تحديثاً لشبكتك، أو نص تواصل مبني على بياناتك الفعلية.",
    "Review before sending anything client-facing": "راجع قبل إرسال أي شيء موجّه للعملاء",
    "The Agent drafts for your review — you decide what actually goes out.": "الوكيل يصيغ المسودة لمراجعتك — أنت من يقرر ما يُرسل فعلياً.",
    "Follow up for more detail": "تابع للمزيد من التفاصيل",
    "Treat it as a conversation, not a single static report.": "تعامل معه كمحادثة، لا كتقرير ثابت واحد."
  });

  ext("solven4-nexus-arena-knowledge-base.html", {
    "Check your Arena standing": "تحقق من ترتيبك في الساحة",
    "See where you rank relative to peers on the leaderboard.": "اطّلع على ترتيبك مقارنة بنظرائك في لوحة المتصدرين.",
    "Build out your Knowledge Base": "ابنِ قاعدة معرفتك",
    "Document processes, FAQs and onboarding steps for anyone joining your network.": "وثّق العمليات والأسئلة الشائعة وخطوات التأهيل لأي منضم إلى شبكتك.",
    "Onboard new team members consistently": "أهّل أعضاء الفريق الجدد باتساق",
    "Point new additions to the Knowledge Base instead of repeating the same explanations manually.": "وجّه المنضمين الجدد إلى قاعدة المعرفة بدلاً من تكرار نفس الشروحات يدوياً.",
    "Use standing as motivation": "استخدم الترتيب كحافز",
    "Reference Arena ranking as a natural, visible incentive for your network.": "استخدم ترتيب الساحة كحافز طبيعي وظاهر لشبكتك."
  });

  ext("solven4-nexus-command-center-dashboard.html", {
    "Open the Command Center each morning": "افتح مركز القيادة كل صباح",
    "Get income, pipeline and network health in one glance before diving into specifics.": "اطّلع على الدخل والمسار وصحة الشبكة بلمحة واحدة قبل الخوض في التفاصيل.",
    "Drill into whatever needs attention": "تعمّق فيما يحتاج اهتماماً",
    "Use it as a starting point — click through to leads, commissions or network detail as needed.": "استخدمه كنقطة بداية — انتقل إلى تفاصيل العملاء المحتملين أو العمولات أو الشبكة حسب الحاجة.",
    "Ask the AI Business Agent for context": "اسأل الوكيل التجاري الذكي عن السياق",
    "For a narrative summary rather than raw numbers, ask the Agent to recap the same data in plain language.": "للحصول على ملخص سردي بدلاً من أرقام خام، اطلب من الوكيل تلخيص نفس البيانات بلغة واضحة.",
    "Track trend, not just snapshot": "تابع الاتجاه، لا اللقطة فقط",
    "Compare today's view against last week's to see whether the business is actually moving in the right direction.": "قارن رؤية اليوم بالأسبوع الماضي لترى إن كان العمل يتحرك فعلياً في الاتجاه الصحيح."
  });

  ext("solven4-nexus-commissions-network.html", {
    "Convert leads into network relationships": "حوّل العملاء المحتملين إلى علاقات شبكة",
    "Deals closed through your pipeline become tracked network relationships.": "الصفقات المُغلقة عبر مسارك تصبح علاقات شبكة متابَعة.",
    "Monitor commissions owed": "راقب العمولات المستحقة",
    "See exactly what's outstanding, traceable back to specific relationships.": "اطّلع بدقة على المستحق، قابلاً للتتبع حتى علاقات محددة.",
    "Track growth over time": "تابع النمو عبر الزمن",
    "Watch network size and activity trend, not just a static current count.": "راقب اتجاه حجم الشبكة ونشاطها، لا مجرد عدد حالي ثابت.",
    "Ask the AI Agent for a recap": "اسأل الوكيل الذكي عن مراجعة",
    "Get a plain-language summary of commissions and growth whenever you need one.": "احصل على ملخص بلغة واضحة للعمولات والنمو وقتما تحتاج."
  });

  ext("solven4-nexus-leads-contacts.html", {
    "Capture a new lead": "سجّل عميلاً محتملاً جديداً",
    "Add contacts manually, import them, or capture them automatically through connected channels.": "أضف جهات اتصال يدوياً، أو استوردها، أو اجذبها تلقائياً عبر القنوات المتصلة.",
    "Move them through your pipeline": "انقلهم عبر مسارك",
    "Track progress from first contact through to a closed deal.": "تابع التقدم من أول تواصل حتى إتمام الصفقة.",
    "Reference the contacts book": "ارجع إلى دفتر جهات الاتصال",
    "Once converted, full relationship history remains accessible, not archived out of view.": "بعد التحوّل، يبقى سجل العلاقة الكامل متاحاً، لا مؤرشفاً بعيداً عن النظر.",
    "Let it feed the rest of NEXUS": "دعه يُغذّي بقية NEXUS",
    "Pipeline activity powers your Command Center summary and commission tracking automatically.": "نشاط المسار يُشغّل ملخص مركز القيادة وتتبع العمولات تلقائياً."
  });

  ext("solven4-nexus-social-whatsapp-telegram.html", {
    "Connect your channels": "اربط قنواتك",
    "Link your social accounts, WhatsApp and Telegram to your NEXUS workspace.": "اربط حساباتك على مواقع التواصل الاجتماعي وواتساب وتيليجرام بمساحة عمل NEXUS.",
    "Plan a campaign or broadcast": "خطّط لحملة أو رسالة جماعية",
    "Draft content yourself or ask the AI Business Agent for a starting draft.": "اصنع المحتوى بنفسك أو اطلب من الوكيل التجاري الذكي مسودة بداية.",
    "Send and track": "أرسل وتابع",
    "Publish or broadcast, then watch resulting leads flow directly into your pipeline.": "انشر أو أرسل، ثم شاهد العملاء المحتملين الناتجين يتدفقون مباشرة إلى مسارك.",
    "Keep it all connected": "حافظ على ترابط كل شيء",
    "Outreach, pipeline and commissions stay in one workspace, not scattered across tools.": "التواصل والمسار والعمولات تبقى في مساحة عمل واحدة، لا موزّعة على أدوات متفرقة."
  });

  ext("solven4-oracle-academy-courses.html", {
    "Pick a course tied to a dashboard engine": "اختر دورة مرتبطة بمحرك في اللوحة",
    "Start with whichever engine you check most or understand least.": "ابدأ بالمحرك الذي تراجعه أكثر أو تفهمه أقل.",
    "Work through it sequentially": "تدرّج فيها بالتسلسل",
    "Lessons build on each other rather than standing alone.": "الدروس تُبنى على بعضها بدلاً من أن تكون منفصلة.",
    "Apply it on the live dashboard": "طبّقها على اللوحة المباشرة",
    "Take what you learned straight to the actual engine to reinforce it.": "طبّق ما تعلمته مباشرة على المحرك الفعلي لترسيخه.",
    "Progress to the next course": "انتقل إلى الدورة التالية",
    "Build a broader skill set across multiple engines over time.": "ابنِ مجموعة مهارات أوسع عبر محركات متعددة بمرور الوقت."
  });

  ext("solven4-oracle-daily-briefings.html", {
    "Read your briefing first thing": "اقرأ موجزك أول شيء",
    "Get a plain-language digest of overnight and pre-market movement before you start trading.": "احصل على موجز بلغة واضحة لحركة الليل وما قبل السوق قبل أن تبدأ التداول.",
    "Follow links to source engines": "تابع الروابط إلى المحركات المصدر",
    "Drill into the full dashboard view for anything that needs more depth.": "تعمّق في العرض الكامل للوحة لأي شيء يحتاج تفصيلاً أكثر.",
    "Ask the AI Assistant for more": "اسأل المساعد الذكي للمزيد",
    "Get additional context on any specific item in the briefing.": "احصل على سياق إضافي لأي عنصر محدد في الموجز.",
    "Build it into your routine": "اجعله جزءاً من روتينك",
    "Make the briefing the first thing you check each trading day.": "اجعل الموجز أول شيء تراجعه في كل يوم تداول."
  });

  ext("solven4-oracle-intelligence-dashboard.html", {
    "Open the Intelligence Dashboard": "افتح لوحة الاستخبارات السوقية",
    "Scan all 11 engines for anything notable before you dig into specifics.": "استعرض المحركات الـ11 كلها بحثاً عن أي شيء لافت قبل الخوض في التفاصيل.",
    "Drill into a specific engine": "تعمّق في محرك محدد",
    "Click into Sentiment, Whales, Macro or any other engine for a deeper, focused view.": "انتقل إلى المشاعر أو الحيتان أو الاقتصاد الكلي أو أي محرك آخر لعرض أعمق ومركّز.",
    "Ask the SOLVEN AI assistant": "اسأل مساعد SOLVEN الذكي",
    "Have it explain any signal in context if something isn't immediately clear.": "اطلب منه شرح أي إشارة ضمن سياقها إن لم يكن شيء واضحاً فوراً.",
    "Build daily habit around it": "اجعله عادة يومية",
    "Combine with Daily Briefings for a consistent pre-market routine.": "ادمجه مع الموجزات اليومية لروتين ثابت قبل السوق."
  });

  ext("solven4-oracle-macro-data.html", {
    "Check upcoming releases": "راجع الإصدارات القادمة",
    "See what economic data is scheduled and when.": "اطّلع على البيانات الاقتصادية المجدولة ومواعيدها.",
    "Read the plain-language breakdown": "اقرأ الشرح بلغة واضحة",
    "Get the number in context — versus expectation, versus prior — not just the raw figure.": "افهم الرقم ضمن سياقه — مقابل التوقعات، ومقابل السابق — لا الرقم الخام فقط.",
    "Cross-reference other engines": "قارن بمحركات أخرى",
    "See whether a release lines up with a shift in Sentiment or Smart Money positioning.": "تحقق إن كان الإصدار يتماشى مع تحوّل في المشاعر أو مراكز الأموال الذكية.",
    "Ask the AI assistant for depth": "اسأل المساعد الذكي للتعمّق",
    "Have it explain historical context or likely market implications on demand.": "اطلب منه شرح السياق التاريخي أو التداعيات المحتملة على السوق عند الطلب."
  });

  ext("solven4-oracle-market-data-news.html", {
    "Check live prices directly": "راجع الأسعار اللحظية مباشرة",
    "View current pricing across the instruments you follow.": "اطّلع على الأسعار الحالية عبر الأدوات التي تتابعها.",
    "Read currency strength readings": "اقرأ قراءات قوة العملات",
    "See which currencies are broadly strong or weak right now.": "اطّلع على العملات القوية أو الضعيفة عموماً الآن.",
    "Scan financial news feeds": "استعرض موجزات الأخبار المالية",
    "Stay current on relevant headlines without switching to an external source.": "ابقَ مطّلعاً على العناوين ذات الصلة دون التبديل إلى مصدر خارجي.",
    "Cross-reference with higher-level engines": "قارن بمحركات أعلى مستوى",
    "Use this raw layer to verify signals from Sentiment, Macro or other engines.": "استخدم هذه الطبقة الخام للتحقق من إشارات المشاعر أو الاقتصاد الكلي أو محركات أخرى."
  });

  ext("solven4-oracle-solven-ai-assistant.html", {
    "Spot something on the dashboard": "لاحظ شيئاً على اللوحة",
    "A signal, a spike, or a data point you want explained.": "إشارة، أو ارتفاع مفاجئ، أو نقطة بيانات تريد شرحها.",
    "Ask the Assistant directly": "اسأل المساعد مباشرة",
    "Point it to the specific engine or signal and ask what it means.": "أشِر له إلى المحرك أو الإشارة المحددة واسأل عن معناها.",
    "Follow up": "تابع بأسئلة إضافية",
    "Ask a comparison or a deeper question — it remembers the context of your conversation.": "اطرح سؤال مقارنة أو سؤالاً أعمق — فهو يتذكر سياق محادثتك.",
    "Build a daily habit": "اجعله عادة يومية",
    "Use it alongside your regular dashboard check and Daily Briefing.": "استخدمه إلى جانب مراجعتك المعتادة للوحة وموجزك اليومي."
  });
})();
