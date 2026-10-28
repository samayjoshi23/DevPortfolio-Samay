import { ChangeDetectionStrategy, Component, computed, signal, viewChild } from '@angular/core';
import { RevealDirective } from '../../../../core/directives/reveal.directive';
import { ALL_FILTER, CASE_STUDIES, DEFAULT_FILTER, FILTER_ICONS, PROJECT_FILTERS, SIDE_PROJECTS } from '../../data/portfolio.data';
import { CaseStudyComponent, GalleryRequest } from '../case-study/case-study.component';
import { GalleryViewerComponent } from '../gallery-viewer/gallery-viewer.component';

@Component({
  selector: 'app-work',
  imports: [CaseStudyComponent, GalleryViewerComponent, RevealDirective],
  templateUrl: './work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class WorkComponent {
  private readonly viewer = viewChild.required(GalleryViewerComponent);

  protected readonly activeFilter = signal(DEFAULT_FILTER);
  protected readonly highlight = computed(() => (this.activeFilter() === ALL_FILTER ? null : this.activeFilter()));
  protected readonly visibleCases = computed(() => CASE_STUDIES.filter((p) => this.matches(p.stack)));
  protected readonly visibleSideProjects = computed(() => SIDE_PROJECTS.filter((p) => this.matches(p.stack)));
  protected readonly filters = PROJECT_FILTERS.map((name) => ({
    name,
    icon: FILTER_ICONS[name] ?? null,
    count: [...CASE_STUDIES, ...SIDE_PROJECTS].filter((p) => name === ALL_FILTER || p.stack.includes(name)).length,
  }));
  protected readonly status = computed(() => {
    const count = this.visibleCases().length + this.visibleSideProjects().length;
    return this.highlight() ? `${count} projects use ${this.highlight()}` : `Showing all ${count} projects`;
  });

  onFilterClick(name: string): void {
    this.activeFilter.set(name);
  }

  onOpenGallery(request: GalleryRequest): void {
    this.viewer().open(request.caseStudy, request.index, request.opener);
  }

  private matches(stack: string[]): boolean {
    return this.activeFilter() === ALL_FILTER || stack.includes(this.activeFilter());
  }
}
