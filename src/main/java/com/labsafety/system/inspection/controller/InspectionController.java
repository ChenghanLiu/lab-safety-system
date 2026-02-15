package com.labsafety.system.inspection.controller;

import com.labsafety.system.inspection.InspectionPlan;
import com.labsafety.system.inspection.InspectionRecord;
import com.labsafety.system.inspection.service.InspectionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/inspection")
public class InspectionController {

    private final InspectionService inspectionService;

    public InspectionController(InspectionService inspectionService) {
        this.inspectionService = inspectionService;
    }

    // ===============================
    // ADMIN 创建检查计划
    // ===============================
    @PostMapping("/plans")
    @PreAuthorize("hasRole('ADMIN')")
    public InspectionPlan createPlan(
            @RequestParam Long labId,
            @RequestParam Long inspectorId,
            @RequestParam String inspectionTime,
            @RequestParam String content) {

        return inspectionService.createPlan(
                labId,
                inspectorId,
                LocalDateTime.parse(inspectionTime),
                content
        );
    }

    // ===============================
    // 提交检查记录（ADMIN / TEACHER）
    // ===============================
    @PostMapping("/plans/{planId}/record")
    @PreAuthorize("hasAnyRole('ADMIN','TEACHER')")
    public InspectionRecord submitRecord(
            @PathVariable Long planId,
            @RequestParam Boolean isSafe,
            @RequestParam(required = false) String problemDescription,
            @RequestParam(required = false) String suggestion) {

        return inspectionService.submitRecord(
                planId,
                isSafe,
                problemDescription,
                suggestion
        );
    }

    // ===============================
    // 查看某实验室检查历史
    // ===============================
    @GetMapping("/labs/{labId}")
    @PreAuthorize("hasAnyRole('ADMIN','TEACHER','STUDENT')")
    public Page<InspectionPlan> getPlansByLab(
            @PathVariable Long labId,
            Pageable pageable) {

        return inspectionService.getPlansByLab(labId, pageable);
    }

    // ===============================
    // 查看单个检查报告
    // ===============================
    @GetMapping("/plans/{planId}/record")
    @PreAuthorize("hasAnyRole('ADMIN','TEACHER','STUDENT')")
    public InspectionRecord getRecord(@PathVariable Long planId) {
        return inspectionService.getRecordByPlan(planId);
    }
}
