import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const fpgaHftProject = {
	title: "FPGA-Accelerated HFT Order Book Engine",
	shortDescription:
		"Hardware order book that parses live NASDAQ ITCH feeds and tracks best bid/offer entirely in FPGA fabric at 100 MHz.",
	tags: [
		"SystemVerilog",
		"FPGA",
		"Embedded Systems",
		"C",
		"Linux",
		"Computer Architecture",
		"Quartus",
		"AXI",
	],
	image: "/images/fpgaHft/pipeline.png",
	labels: ["Hardware"],
	fullContent: (
		<div>
			<section>
				<img
					src="/images/fpgaHft/pipeline.png"
					alt="Order book pipeline: buffered_ingest -> itch_parser -> stock_match -> hash_table -> pla -> bbo_bitmap -> vga_display"
					className="w-full rounded-lg shadow-lg"
				/>
				<h3 className="font-semibold mt-4">Premise</h3>
				<ul className="list-disc ml-6">
					<li>
						Final project for CSEE W4840 (Embedded Systems) at
						Columbia, built with a 4-person team (Shawn Kathuria,
						Sarah Hagan, Siddharth Raykar, and me) on an Altera
						DE1-SoC (Cyclone V).{" "}
					</li>
					<li>
						Goal: bypass the OS, kernel network stack, and CPU
						entirely for the hot path. Incoming NASDAQ ITCH 5.0
						market data is parsed, filtered, and used to maintain a
						live limit order book directly in FPGA fabric, tracking
						the Best Bid/Offer (BBO) with deterministic,
						cycle-counted latency instead of software's
						unpredictable tail latencies.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Responsibilities</h3>
				<ul className="list-disc ml-6">
					<li>
						Owned the HPS↔FPGA system integration: the Platform
						Designer (Qsys) system, the Avalon-MM register map, and
						the top-level <code>orderbook_core</code> peripheral
						that ties the datapath, VGA output, and serial debug
						together.{" "}
					</li>
					<li>
						Built the ingest side of the pipeline — the
						ping-pong BRAM <code>buffered_ingest</code> block and
						the <code>itch_parser</code> — plus the HPS-side{" "}
						<code>itch_load</code> tool that pre-scans a session
						for ticker symbols and programs the hardware filter
						registers.{" "}
					</li>
					<li>
						Wrote the live VGA status dashboard (
						<code>vga_writer</code>) and the ARM/Cortex-A9
						software reference model used to validate hardware
						results and measure the FPGA-vs-software speedup.{" "}
					</li>
					<li>
						Teammates led the 16,384-slot hash table, the
						price-level array (PLA), and the BBO priority-encoder
						bitmap — the pieces that turn parsed order events into
						a maintained book.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Outcomes</h3>
				<ul className="list-disc ml-6">
					<li>
						Zero-latency, parse-time ticker filtering: non-matching
						messages are dropped combinationally before they ever
						reach the hash table, so tracking fewer symbols never
						costs stall cycles.{" "}
					</li>
					<li>
						Deterministic hardware order book: open-addressed,
						linear-probing hash table in on-chip M10K BRAM with
						backward-shift deletion (no tombstone fragmentation),
						and a 2-stage combinational priority encoder that
						extracts BBO inside 2 clock cycles.{" "}
					</li>
					<li>
						Passed a battery of hardware stress tests up to 2M
						messages — capacity saturation (16,384/16,384 slots,
						zero overflow), collision-chain saturation, and
						add/cancel/replace churn — with zero drops and zero
						framing errors.{" "}
					</li>
					<li>
						On a live demo run, the FPGA path beat the ARM
						reference model by ~1.2x in pure processing
						throughput (7.58M msg/s vs. 6.34M msg/s) while
						matching its BBO output exactly — the win was less
						about the multiplier and more about not having any
						long OS-driven tail latencies.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Technologies Used</h3>
				<div className="mt-3 flex flex-wrap gap-1.5">
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						SystemVerilog
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Quartus Prime
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Platform Designer (Qsys)
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						C
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Embedded Linux
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						AXI / Avalon-MM
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						ARM Cortex-A9
					</span>
				</div>
			</section>
			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					Live hardware demo
				</h2>
				<img
					src="/images/fpgaHft/liveDemo.jpg"
					alt="VGA dashboard showing live FPGA HFT pipeline monitor stats"
					className="w-full rounded-lg shadow-lg"
				/>
				<br></br>
				<p>
					The VGA dashboard pulls live diagnostics straight from
					hardware counters — message counts, hash table load
					factor, max probe depth, and the current BBO for tracked
					symbols — so we could watch the book update in real time
					during the demo instead of only trusting a post-hoc log.
					This run: 1,000,000 messages, 0 errors, 801/16,384 hash
					table slots occupied, and BBO matching the ARM reference
					model exactly across both tracked stocks.
				</p>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					Hardware test matrix
				</h2>
				<img
					src="/images/fpgaHft/testMatrix.png"
					alt="Hardware test matrix covering baseline, replace, churn, capacity, and adversarial collision tests"
					className="w-full rounded-lg shadow-lg"
				/>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						Every passing run had to end with the hash table and
						order book FSMs back at idle and zero stuck cycles —
						the "collision saturation" and "Tier 3 adversarial"
						rows are deliberately pathological inputs (all orders
						hashing into the same neighborhood) used to confirm
						the table degrades to bounded, no-hang behavior
						instead of corrupting state.{" "}
					</li>
				</ul>
			</section>
			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					Best Bid/Offer: 2-stage priority encoder
				</h2>
				<SyntaxHighlighter
					language="verilog"
					style={solarizedlight}
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`// Stage 1: find the best occupied slot within each of N_GROUPS buckets
    for (g = 0; g < N_GROUPS; g++) begin : gen_stage1
        logic [GROUP_SIZE-1:0] grp;
        assign grp = active[g*GROUP_SIZE +: GROUP_SIZE];
        assign group_any[g] = |grp;

        always_comb begin
            group_idx[g] = '0;
            if (IS_MAX) begin // highest set bit = best bid
                for (int i = GROUP_SIZE-1; i >= 0; i--)
                    if (grp[i]) begin group_idx[g] = i[WITHIN_BITS-1:0]; break; end
            end else begin    // lowest set bit = best ask
                for (int i = 0; i < GROUP_SIZE; i++)
                    if (grp[i]) begin group_idx[g] = i[WITHIN_BITS-1:0]; break; end
            end
        end
    end

    // Stage 2 (registered): pick the winning group, one cycle later
    always_comb begin
        best_group = '0; best_within = '0;
        for (int gg = N_GROUPS-1; gg >= 0; gg--)
            if (group_any_r[gg]) begin
                best_group  = gg[GROUP_BITS-1:0];
                best_within = group_idx_r[gg];
                break;
            end
    end

    assign best_valid = (group_any_r != '0);
    assign best_price = {best_group, best_within};`}
				</SyntaxHighlighter>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						Each stock side (bid/ask) keeps a 2<sup>13</sup>-bit
						"active" bitmap in fabric — one bit per 1-cent price
						bucket. Rather than scanning all 8,192 bits, the
						buckets are split into 64 groups: stage 1 finds the
						best occupied slot within every group in parallel,
						stage 2 picks the winning group off a small,
						pipeline-registered summary. That's how BBO comes out
						in 2 clock cycles instead of one comb path across the
						whole bitmap.{" "}
					</li>
				</ul>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					Hash table: backward-shift delete
				</h2>
				<SyntaxHighlighter
					language="verilog"
					style={solarizedlight}
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`S_DELETE_SHIFT_DECIDE: begin
    if (!rd_valid) begin
        state <= S_DONE;                       // end of chain, nothing left to shift
    end else if (shift_needed) begin           // scanned slot can legally fill the hole
        mem_addr  <= hole_idx;
        mem_wdata <= mem_rdata;
        mem_we    <= 1'b1;
        state     <= S_DELETE_SHIFT_WRITE;
    end else begin                             // keep scanning forward in the probe chain
        scan_idx  <= scan_idx + IDX_ONE;
        chain_len <= chain_len + 8'd1;
        state     <= (chain_len >= MAX_CHAIN) ? S_DONE : S_DELETE_SHIFT_ISSUE;
    end
end`}
				</SyntaxHighlighter>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						Deleting from an open-addressed table normally leaves
						a "tombstone" that breaks future probes unless you
						check for it forever. Instead, on delete the FSM walks
						forward from the freed slot and backward-shifts the
						next entry into the hole whenever its ideal hash
						distance allows it (
						<code>shift_needed = dist_h &lt; dist_j</code>),
						repeating until the chain is compacted. No tombstones,
						no unbounded probe growth over the table's lifetime.{" "}
					</li>
				</ul>
			</section>
			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					Host-side filter programming
				</h2>
				<SyntaxHighlighter
					language="bash"
					style={solarizedlight}
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`$ sudo ./itch_load input/stress_500.bin AAPL MSFT
Scanning file for Stock Directory ('R') messages...
  [R msg] 'AAPL' -> stock_locate=1
  [R msg] 'MSFT' -> stock_locate=2
Resolved 2 / 2 requested symbols.

Programming hardware filters:
  FILTER_ID0 = 1  (AAPL)
  FILTER_ID1 = 2  (MSFT)

HT_LOAD : 500 / 16384 slots`}
				</SyntaxHighlighter>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						<code>itch_load</code> pre-scans a session's Stock
						Directory records to resolve ticker → session-local ID,
						writes up to 4 IDs into hardware filter registers, then
						streams the file into the FPGA over a ping-pong BRAM
						(one 8 KB half processed while the HPS fills the
						other). Everything downstream of the filter — the hash
						table, PLA, and BBO bitmap — only ever sees messages
						for the symbols actually being tracked.{" "}
					</li>
				</ul>
			</section>
			<h2 className="font-bold mt-4 text-xl">
				Full Github repo here:{" "}
				<a
					href="https://github.com/sucrammal/FPGA_HFT"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
				>
					Link
				</a>
			</h2>
		</div>
	),
};

export default fpgaHftProject;
