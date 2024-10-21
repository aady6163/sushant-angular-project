import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-paid-courses-single-page',
    templateUrl: './paid-courses-single-page.component.html',
    styleUrls: ['./paid-courses-single-page.component.scss']
})
export class PaidCoursesSinglePageComponent implements OnInit {

    // Variables for drag-and-drop options and answers
    options: string[] = ['MH', 'UP', 'J&K', 'MP', 'KA'];
    answerSlots: string[] = Array(5).fill('');

    currentDraggedOption: string | null = null;

    constructor() { }

    ngOnInit(): void {}

    // Handle the drag start event
    onDragStart(event: DragEvent, option: string): void {
        event.dataTransfer?.setData('text', option);
        this.currentDraggedOption = option;
    }

    // Allow dragging over a slot (required to enable drop event)
    onDragOver(event: DragEvent): void {
        event.preventDefault();
    }

    // Handle the drop event
    onDrop(event: DragEvent, index: number): void {
        event.preventDefault();
        const data = event.dataTransfer?.getData('text') || this.currentDraggedOption;

        // Place the dragged option in the correct slot
        if (data) {
            this.answerSlots[index] = data;
            // Remove the option from the list (optional, based on your need)
            this.options = this.options.filter(option => option !== data);
            this.currentDraggedOption = null;
        }
    }

    // Reset the answers and options
    reset(): void {
        this.answerSlots = Array(5).fill('');
        this.options = ['MH', 'UP', 'J&K', 'MP', 'KA'];
        this.currentDraggedOption = null;
    }

    // Video Popup Example (Unrelated)
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }

    closePopup(): void {
        this.isOpen = false;
    }
}
