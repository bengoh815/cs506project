/******************************************************************************
 * Filename: PlaybackAudio.test.js
 * Purpose:  Tests the PlaybackAudio component.
 * Author:   Victor Nguyen
 *
 * Description:
 * This file contains tests for the PlaybackAudio component. The tests ensure that the component renders correctly. A snapshot test is included to catch unintended changes to the component's structure or behavior.
 *
 * Usage:
 * Run the tests using the command `npm test`.
 *
 * Note:
 * More tests to be added/implemented for:
 * - Testing the playback functionality
 * - Testing the pause functionality
 * - Testing the resume functionality
 * - Testing the end of the recording
 * - Testing the seek bar
 *
 ******************************************************************************/

import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import PlaybackAudio from "./PlaybackAudio";

// Cleans up the DOM after each test to ensure a clean environment.
afterEach(() => {
  cleanup();
});

// basic render test
test("renders the component", () => {
  // Arrange
  render(<PlaybackAudio />);

  // Assert
  expect(screen.getByText("Play Recording")).toBeInTheDocument();
});

// Snapshot test
test("matches snapshot", () => {
  // Arrange
  const tree = renderer.create(<PlaybackAudio />).toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
});