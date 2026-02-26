---
layout: page
title: Hardware Accelerator for 1D Differential Filtering
description: A VHDL implementation of a hardware module for applying order 3 and order 5 differential filters on an FPGA.
tags: [VHDL, FPGA, Hardware Design, Digital Logic]
---

This project, part of the "Reti Logiche" (Logic Networks) course at Politecnico di Milano, involved designing a hardware component in **VHDL** to perform 1D differential filtering on a sequence of data. The module interfaces with a synchronous RAM to read instructions and data, processes them, and writes the saturated results back to memory.

## The Challenge
The hardware module had to process a continuous stream of 8-bit signed integers (complemento a 2). The process involved:
- Reading a **17-byte header** to extract the sequence length ($K$), the filter order selector ($S$), and 14 dynamic coefficients.
- Applying either an **Order 3** or **Order 5** differential filter based on the selector.
- Performing hardware-efficient normalization (division by 12 or 60) without using expensive division blocks.
- Applying saturation logic to clamp the final results within the $[-128, +127]$ range before writing back to memory.

## Architectural Design
The system was implemented as a **Finite State Machine (FSM)** combined with a highly optimized datapath.

### 1. Finite State Machine (FSM)
I designed a reliable FSM to handle memory synchronization and data processing:
- **WAIT_START & BUS_HANDOVER:** Handles the initialization and prevents misalignment during multiple consecutive start/reset cycles.
- **READ_HEADER:** Uses a demultiplexer logic to sequentially load the 17 setup bytes into internal registers.
- **RUN_READ & RUN_SHIFT:** Forms the core processing loop, fetching payload bytes and sliding them through the calculation window.

### 2. Optimized Datapath & Arithmetic
To meet strict timing and area constraints, complex arithmetic was mapped to simple hardware operations:
- **Sliding Data Window:** Created a 7-element shift register (`x0` to `x6`) to align the incoming sequence with the dynamic filter coefficients.
- **Multiply-Accumulate (MAC):** Executed parallel multiplications resized to 20 bits to prevent overflow during accumulation.
- **Shift-Based Division:** Avoided costly hardware dividers by approximating the normalization. For example, dividing by 12 for the Order 3 filter was achieved via right bit-shifts: $1/12 \approx 1/16 + 1/64 + 1/256 + 1/1024$. Custom compensation logic (`+1` on shifts) was added to minimize truncation errors on negative numbers.

## Results
The component was synthesized successfully in Vivado with excellent performance metrics:
- **Resource Utilization:** Highly efficient, using only 971 LUTs (0.83%) and 269 Flip-Flops (0.11%).
- **Timing:** Passed timing constraints easily, achieving a positive slack of $9.460\text{ ns}$ on a strict $20\text{ ns}$ clock period, proving the logic could run comfortably at speeds well above 50 MHz.
- **Reliability:** Handled complex edge cases, such as multiple consecutive resets and memory out-of-bounds protection, passing all provided and custom testbenches.

> **Source Code:** [View on GitHub](https://github.com/DomDegi/Prova_finale_reti_logiche)