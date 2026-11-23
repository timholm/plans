const versus = [
  { tag: "Team plan", title: "Built for headcount, priced like a casino", body: "Robert and Jonathan moved their two person startup onto team plans and burned 46% of a weekly Codex limit in three or four prompts. The pooled limits and per seat pricing are shaped for big companies, and a tiny team feels every spike." },
  { tag: "Personal plan", title: "More runway for the same money", body: "Their conclusion from running both: personal plans get a small team way more usage for the money. The episode's title is the whole argument: Claude's team plan isn't worth it at this size." },
  { tag: "The hidden cost", title: "Routines burn tokens in the background", body: "Scheduled routines keep firing whether you watch them or not. Robert found the hidden heartbeat system prompt inside his scheduled routines in the Dot app, which is how limits drain quietly between the prompts you actually send." },
];

const agents = [
  { tag: "Anthropic", title: "Claude Duet", body: "Anthropic's proactive agent, the cold open of the episode: an agent that comes to you instead of waiting to be asked." },
  { tag: "The incumbent", title: "Dot", body: "The personal agent Robert already lives in. Its scheduled routines run on a hidden heartbeat prompt he dug out on screen, which is both the magic and the token leak." },
  { tag: "The all rounder", title: "Muse (the assistant)", body: "Compared head to head with Dot, Grok Bot and Claude Duet in the episode's personal agent face off at 12:19." },
  { tag: "xAI", title: "Grok Bot, the cat herder", body: "The bot Robert and Jonathan actually run across GitHub and Linear to herd the work. It has a marketplace of ready made bots, which is where the live demo happens." },
];

const market = [
  { tag: "Featured", title: "dr eggbot, by Lauren Tan", body: "The demo bot of the episode. A lab assistant that sets up and audits other bots." },
  { tag: "Featured", title: "Overheard, by Lenny Rachitsky", body: "Featured next to dr eggbot in the marketplace grid." },
  { tag: "Featured", title: "TradBot, by Claire Vo", body: "A trading bot in the featured row." },
  { tag: "Featured", title: "Projects Manager, by Eric Zakariasson", body: "Project management in the featured row." },
  { tag: "From the Grok Bot team", title: "Outbound Prospecting, by Krista Leitz", body: "Finds prospects that match your criteria, one click to add." },
  { tag: "From the Grok Bot team", title: "SEO & AEO Desk, by Adam Tanguay", body: "Turns your keywords into content." },
  { tag: "From the Grok Bot team", title: "Haggle Bot, by Daniel Gartshein", body: "Inventories your SaaS spend and haggles it down." },
  { tag: "From the Grok Bot team", title: "Recruiting Coordinator, by Tommy Hansen", body: "Schedules interview loops and prep. Which connects to Twin Cafe later in the episode: recruiters interviewing your AI twin." },
];

const demo = [
  { tag: "Step 1, setup", title: "Routines and healthchecks, created on its own", body: "Dr eggbot opens by setting up its lab: it creates a transcript healthcheck and a routine healthcheck, then two standing audits. One scans bot chats for friction on weekday mornings around 8:44 AM PT. The other audits every bot's routines for wasted tokens on Mondays around 8:49 AM PT. Both stay quiet unless they find something worth fixing." },
  { tag: "Step 2, the job", title: "One job: work the Clarity harness repos", body: "Given the job in one sentence, eggbot checks the lay of the land first: four harness repos (the gateway, hosted, cleanroom and plugins repos), and it warns that another bot already owns harness GTM, so it will keep the new bot out of that lane." },
  { tag: "Step 3, the handoff", title: "Claude Code orchestrates, eggbot implements", body: "The design they land on: Claude Code writes tickets and orchestrates, eggbot takes each ticket and implements it through a cloud agent on its own branch, then opens a PR and reports the link back. Its pick for the handoff is a Linear label: add a label like eggbot to an issue and a routine listening for that label fires the cloud agent, posts the PR link on the issue and moves it to In Review. The alternative, a webhook, is faster but needs a secret key stored on your Mac and leaves less of a trail." },
];

const meta = [
  { tag: "Agent swarms", title: "The $3,300 SQLite rebuild", body: "Cursor rebuilt SQLite with a brain and hands agent swarm for about $3,300 in tokens. The episode's read: swarms of a planner plus workers are the current meta for big coding jobs, and the bill is the point, it is cheaper than the engineer time it replaces." },
  { tag: "Spec driven development", title: "Clarity Align", body: "Specs first, code second: the Clarity team's Align approach gets a full segment, tied to the harness work dr eggbot was being set up to do." },
  { tag: "Discovery vs delivery", title: "Before product market fit", body: "A long segment on why discovery work and delivery work want different agent setups, and why mixing them burns budget." },
  { tag: "Secrets for agents", title: "1Password for agents", body: "Agents need credentials the way staff do, and the episode covers 1Password's answer for agent identity: scoped, auditable access instead of keys pasted into prompts." },
  { tag: "Hiring", title: "Twin Cafe", body: "Recruiters interview your AI twin before they ever talk to you. The hosts try it and give their takes in the Twin Takes segment." },
  { tag: "The punchline", title: "Grok Bot pays for itself", body: "The memes segment closes the loop: the cat herder bot across GitHub and Linear earns its keep, which is the real test for every agent in this episode." },
];

const chapters = [
  ["00:00", "Claude Duet, 1Password for agents and twins in hiring"],
  ["01:11", "The agenda"],
  ["01:33", "Claude Duet: Anthropic's proactive agent"],
  ["06:29", "Scheduled routines burning your tokens"],
  ["07:12", "Dot's hidden heartbeat prompt"],
  ["12:19", "Dot vs Muse vs Grok Bot vs Claude Duet"],
  ["15:05", "How we each use Grok Bot"],
  ["22:15", "Team plans vs personal plans for small teams"],
  ["28:11", "Live demo: Lauren Tan's Doctor Egbert template"],
  ["32:24", "What's the meta: agent swarms and the $3,300 SQLite rebuild"],
  ["33:57", "What's the meta: spec driven development with Clarity Align"],
  ["38:29", "Discovery vs delivery before product market fit"],
  ["46:05", "1Password for agents"],
  ["51:15", "Twin Cafe: recruiters interview your AI twin"],
  ["59:14", "Twin takes: Twin Cafe"],
  ["1:06:39", "AI memes: Grok Bot pays for itself"],
  ["1:10:27", "Wrap up"],
];

function card(item) {
  const el = document.createElement("article");
  el.className = "card";
  const count = document.createElement("div");
  count.className = "count";
  count.textContent = item.tag;
  const h = document.createElement("h3");
  h.textContent = item.title;
  const p = document.createElement("p");
  p.textContent = item.body;
  el.append(count, h, p);
  return el;
}

document.getElementById("versus").replaceChildren(...versus.map(card));
document.getElementById("agents").replaceChildren(...agents.map(card));
document.getElementById("market").replaceChildren(...market.map(card));
document.getElementById("demo").replaceChildren(...demo.map(card));
document.getElementById("meta").replaceChildren(...meta.map(card));

const list = document.getElementById("chapters");
for (const [time, name] of chapters) {
  const li = document.createElement("li");
  const t = document.createElement("span");
  t.className = "chtime";
  t.textContent = time;
  li.append(t, document.createTextNode(name));
  list.append(li);
}
